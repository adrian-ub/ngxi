import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPouchdbIcon],svg[logos-pouchdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-opacity=".9"><svg:path fill="#6CCB94" d="M18.752 0L0 91.459l53.782 50.743l-34.943 62.289L89.94 329.677h77.785l71.406-125.186l-35.245-62.29l51.96-50.742L238.738 0L165.6 97.41H92.372z"></svg:path><svg:path fill="#5DBD85" d="m18.839 204.49l34.942-62.288l75.044 62.29z"></svg:path><svg:path fill="#64C48C" d="m53.782 142.203l75.044 62.29L92.371 97.41z"></svg:path><svg:path fill="#6ECC95" d="m239.13 204.49l-35.246-62.288l-75.056 62.29z"></svg:path><svg:path fill="#5EBE86" d="M89.94 329.677h77.784l-38.897-125.186z"></svg:path><svg:path fill="#76D29C" d="m203.884 142.203l-75.056 62.29L165.599 97.41z"></svg:path><svg:path fill="#74D09B" d="m238.74 0l17.102 91.46l-51.958 50.743l-38.286-44.793z"></svg:path><svg:path fill="#64C48C" d="m128.825 204.49l38.9 125.187l71.405-125.186z"></svg:path><svg:path fill="#58B880" d="M128.825 204.49L89.928 329.678L18.84 204.491z"></svg:path><svg:path fill="#5FBF87" d="M18.752 0L0 91.46l53.782 50.744L92.37 97.41z"></svg:path><svg:path fill="#6ECC95" d="m128.825 204.49l36.773-107.079H92.371z"></svg:path></svg:g>`,
})
export class LogosPouchdbIcon {
  readonly viewBox = input("0 0 256 330")
  readonly width = input("0.78em")
  readonly height = input("1em")
}
