import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGirlIcon],svg[material-symbols-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5q-.725 0-1.237-.513T10.25 5.75t.513-1.237T12 4t1.238.513t.512 1.237t-.513 1.238T12 7.5M10 20v-4H8l2.375-6.375q.2-.5.638-.812T12 8.5t.988.313t.637.812L16 16h-2v4z"></svg:path>`,
})
export class MaterialSymbolsGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
