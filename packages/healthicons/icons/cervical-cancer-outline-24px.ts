import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCervicalCancerOutline24pxIcon],svg[healthicons-cervical-cancer-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.773 2.384L5.727 8.268a14.09 14.09 0 0 0 1.137 11.728l.504.864l-1.728 1.008l-.504-.864A16.09 16.09 0 0 1 3.838 7.61l2.046-5.884zm8.454 0l2.047 5.884a14.09 14.09 0 0 1-1.138 11.728l-.504.864l1.728 1.008l.504-.864A16.09 16.09 0 0 0 20.163 7.61l-2.047-5.884zM13 21v-5.086l3.207-3.207l-1.414-1.414L12 14.086l-2.793-2.793l-1.414 1.414L11 15.914V21z"></svg:path><svg:path fill-rule="evenodd" d="M11.633 3c-1.65 0-2.496 1.978-1.355 3.171l.684.715l-2.004 2.096l1.084 1.037L12 7.97l1.958 2.047l1.084-1.036l-2.004-2.096l.684-.715c1.14-1.193.296-3.17-1.355-3.17zm1.005 2.134L12 5.801l-.638-.667a.375.375 0 0 1 .27-.634h.735c.33 0 .5.396.271.634" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsCervicalCancerOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
