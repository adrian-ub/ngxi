import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResumeRoundedIcon],svg[material-symbols-light-resume-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.23 16.116V7.885q0-.213.145-.357t.357-.144t.356.144t.143.356v8.231q0 .213-.144.357q-.144.143-.357.143t-.356-.143t-.143-.357m4.602-.227q-.404.243-.811.002q-.407-.242-.407-.704V8.814q0-.462.407-.704q.407-.24.81.002l5.34 3.192q.384.246.384.698t-.385.694z"></svg:path>`,
})
export class MaterialSymbolsLightResumeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
