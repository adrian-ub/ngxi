import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsApprovalDelegationIcon],svg[material-symbols-approval-delegation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.025V11h1.6q.175 0 .35.038t.35.087l6.925 2.575q.35.125.563.45t.212.675q0 .525-.363.85T15.8 16h-2.625q-.125 0-.187-.012t-.163-.063l-1.6-.625l-.325.975l1.925.675q.05.025.15.038t.175.012H20q.8 0 1.4.575T22 19l-7.975 3zM1 22V11h4v11zm11.925-10.95L8.675 6.8L10.1 5.4l2.825 2.825l5.675-5.65l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsApprovalDelegationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
