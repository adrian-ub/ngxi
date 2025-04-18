import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPaperPlaneSolidIcon],svg[la-paper-plane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.594 5.344l.437 1.875L5.97 16l-1.94 8.781l-.437 1.875l1.781-.718l22-9L29.656 16l-2.281-.938l-22-9zm2.781 3.312L21.906 15H7.781zM7.781 17h14.125L6.375 23.344z"></svg:path>`,
})
export class LaPaperPlaneSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
