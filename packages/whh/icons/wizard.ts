import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWizardIcon],svg[whh-wizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.075 1005q-19 19-45 20t-44-17l-642-643q-18-18-17-44t20-45t45-20t44 17l642 643q18 18 17 44t-20 45m-60-749l-80-46l-79 46l17-93l-66-65l90-12l38-86l39 86l90 12l-66 65zm-798-17l-129-130q-18-18-17-44t20-45t45-20t44 17l129 130q18 18 17 44t-20 45t-45 20t-44-17m-25 231l39-86l38 86l90 12l-66 65l17 94l-79-46l-80 46l17-94l-65-65zm256 385l39-86l38 86l90 11l-66 66l17 93l-79-46l-79 46l17-93l-66-66z"></svg:path>`,
})
export class WhhWizardIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
