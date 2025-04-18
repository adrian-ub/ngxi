import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPagekiteIcon],svg[logos-pagekite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E80022" d="M206.052 203.265C237.813 190.014 256 183.436 256 183.436L189.698 0L0 40.15s4.022 11.406 10.833 56.141L152.495 64.46z"></svg:path><svg:path fill="#B6B1B1" d="M22.837 187.856c3.068 27.315 6.069 58.652 9.577 96.507a2594 2594 0 0 1 88.56-43.423l-25.941-69.291z"></svg:path><svg:path fill="#748282" d="M13.422 114.016c2.152 15.307 4.524 33.606 7.085 55.417l85.945-20.253l30.88 84.2a2291 2291 0 0 1 50.227-22.289L141.076 86.93z"></svg:path>`,
})
export class LogosPagekiteIcon {
  readonly viewBox = input("0 0 256 285")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
