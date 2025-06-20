import {inject, Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  basicInfoCreate,
  list,
  memberFormValues,
  memberInfo,
  selectedMemberId
} from '../state/actions/members.action';
import {
  selectIsLoading,
  selectMemberBasicInfo,
  selectMemberDewInfo,
  selectMemberFormValues,
  selectMemberGeneralInfo,
  selectMemberList,
  selectMemberListError,
  selectMemberReferences,
  selectSelectedMemberId
} from '../state/selector/member.selector';
import {MemberBasicInfo} from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private _store = inject(Store);

  public dispatchList() {
    this._store.dispatch(list());
  }

  public dispatchSelectedMemberId(memberId: number) {
    this._store.dispatch(selectedMemberId({ memberId }));
  }

  public fetchMemberList() {
    return this._store.select(selectMemberList);
  }

  public fetchSelectedMemberId() {
    return this._store.select(selectSelectedMemberId);
  }

  public fetchCurrentMemberListError() {
    return this._store.select(selectMemberListError);
  }

  public fetchIsLoading() {
    return this._store.select(selectIsLoading);
  }

  public fetchMemberBasicInfo() {
    return this._store.select(selectMemberBasicInfo);
  }

  public dispatchMember(memberId: number) {
    if (memberId < 1) {
      return;
    }
    this._store.dispatch(memberInfo({ memberId }));
  }

  public dispatchMemberBasicInfoCreate(member: MemberBasicInfo) {
    this._store.dispatch(basicInfoCreate(member));
  }

  public fetchMemberGeneralInfo() {
    return this._store.select(selectMemberGeneralInfo);
  }

  public fetchMemberReferences() {
    return this._store.select(selectMemberReferences);
  }

  public fetchMemberDewInfo() {
    return this._store.select(selectMemberDewInfo);
  }

  public dispatchMemberFormValues() {
    this._store.dispatch(memberFormValues());
  }

  public fetchMemberFormValues() {
    return this._store.select(selectMemberFormValues);
  }
}

