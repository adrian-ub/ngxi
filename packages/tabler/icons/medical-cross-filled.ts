import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMedicalCrossFilledIcon],svg[tabler-medical-cross-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 2l-.15.005A2 2 0 0 0 9 4v2.803L6.572 5.402a2 2 0 0 0-2.732.732l-1 1.732l-.073.138a2 2 0 0 0 .805 2.594L5.999 12l-2.427 1.402a2 2 0 0 0-.732 2.732l1 1.732l.083.132a2 2 0 0 0 2.649.6L9 17.196V20a2 2 0 0 0 2 2h2l.15-.005A2 2 0 0 0 15 20v-2.804l2.428 1.403a2 2 0 0 0 2.732-.732l1-1.732l.073-.138a2 2 0 0 0-.805-2.594L18 12l2.428-1.402a2 2 0 0 0 .732-2.732l-1-1.732l-.083-.132a2 2 0 0 0-2.649-.6L15 6.802V4a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TablerMedicalCrossFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
