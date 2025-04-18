import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalDelegationIcon],svg[material-symbols-light-approval-delegation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 19.583v-6.737h2.08q.137 0 .283.028t.283.078l6.021 2.21q.446.163.736.536q.289.373.289.839q0 .275-.18.446t-.443.17h-1.202q-.51 0-.995-.06t-.951-.226l-1.792-.644l-.287.744l1.964.675q.472.16.976.22q.504.061 1.021.061h5.158q.685 0 1.17.45T21 19.5l-6.994 2.308zm-4 1.417v-8.154h3V21zm10.54-9.95L9.386 7.511l.714-.688l2.825 2.825l5.675-5.65l.689.688z"></svg:path>`,
})
export class MaterialSymbolsLightApprovalDelegationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
