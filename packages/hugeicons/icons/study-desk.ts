import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStudyDeskIcon],svg[hugeicons-study-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12H2m18 5h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M15.04 2.599a1.94 1.94 0 0 0-2.648 0c-.414.393-.572.845-.115 1.28l1.416 1.348c.456.434.929.29 1.347-.108a1.72 1.72 0 0 0 0-2.52m0 0c.496-.326 1.053-.781 1.672-.523c.29.122.49.419.889 1.013l1.498 2.233c.565.842.847 1.263.894 1.74c.047.476-.148.94-.539 1.865L18.158 12M4 12V7.5C4 6.373 4.45 6 5.5 6S7 6.373 7 7.5V12m0 0V7.5C7 6.373 7.45 6 8.5 6s1.5.373 1.5 1.5V12" color="currentColor"></svg:path>`,
})
export class HugeiconsStudyDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
