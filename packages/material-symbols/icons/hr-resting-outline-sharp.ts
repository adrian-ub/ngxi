import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHrRestingOutlineSharpIcon],svg[material-symbols-hr-resting-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h18v2zm2.425-9.6q-.725-.675-1.062-1.6t-.338-1.9q0-2.025 1.388-3.463T8.8 3q.9 0 1.725.325t1.475.95q.65-.625 1.475-.95T15.2 3q2.025 0 3.413 1.45T20 7.925q0 .975-.363 1.863T18.6 11.375l-6.6 6.4zm1.4-1.4L12 15l5.2-5.025q.425-.4.625-.938t.2-1.112q0-1.2-.812-2.05t-1.988-.85q-.55 0-1.062.213t-.888.612L12 7.15l-1.25-1.3q-.4-.4-.888-.625T8.8 5q-1.175 0-1.987.85T6 7.9q0 .575.2 1.125t.625.975M12 10"></svg:path>`,
})
export class MaterialSymbolsHrRestingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
