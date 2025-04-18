import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biWrenchAdjustableCircleFillIcon],svg[bi-wrench-adjustable-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.705 8.139a.25.25 0 0 0-.288-.376l-1.5.5l.159.474l.808-.27l-.595.894a.25.25 0 0 0 .287.376l.808-.27l-.595.894a.25.25 0 0 0 .287.376l1.5-.5l-.159-.474l-.808.27l.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"></svg:path><svg:path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m-6.202-4.751l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5l1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2a7.03 7.03 0 0 1-2.949-2.951M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"></svg:path></svg:g>`,
})
export class BiWrenchAdjustableCircleFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
