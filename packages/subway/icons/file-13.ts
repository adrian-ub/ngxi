import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile13Icon],svg[subway-file-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0v128h128zm-21.3 0H64v512h384V149.3H298.7zm-192 42.7H256v106.7H106.7zM256 405.3H106.7v-42.7H256zM405.3 320H106.7v-42.7h298.7V320zm0-128v42.7H106.7V192z"></svg:path>`,
})
export class SubwayFile13Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
