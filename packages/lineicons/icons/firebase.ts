import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFirebaseIcon],svg[lineicons-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.32 15.057l1.948-12.67c.067-.431.637-.533.839-.147l2.092 3.977zm13.84 3.08l-1.857-11.67a.449.449 0 0 0-.76-.25L4.84 18.137l6.478 3.692c.402.228.906.228 1.309 0zM13.903 7.956l-1.5-2.898a.443.443 0 0 0-.793 0L5.02 16.989z"></svg:path>`,
})
export class LineiconsFirebaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
