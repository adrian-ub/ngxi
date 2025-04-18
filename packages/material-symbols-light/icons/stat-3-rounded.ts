import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStat3RoundedIcon],svg[material-symbols-light-stat-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.108l-4.246 4.24q-.14.14-.341.153t-.367-.153q-.16-.16-.16-.354t.16-.354l4.221-4.22q.306-.307.733-.307t.733.306l4.22 4.221q.141.14.154.342t-.153.366q-.16.16-.354.16t-.354-.16zm0-6l-4.246 4.24q-.14.14-.341.153t-.367-.153q-.16-.16-.16-.354t.16-.354l4.221-4.22q.306-.307.733-.307t.733.306l4.22 4.221q.141.14.154.342t-.153.366q-.16.16-.354.16t-.354-.16zm0-6l-4.246 4.24q-.14.14-.341.153t-.367-.153q-.16-.16-.16-.354t.16-.353l4.221-4.222q.306-.305.733-.305t.733.305l4.22 4.222q.141.14.154.34t-.153.367q-.16.16-.354.16t-.354-.16z"></svg:path>`,
})
export class MaterialSymbolsLightStat3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
