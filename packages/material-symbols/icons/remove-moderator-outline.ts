import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRemoveModeratorOutlineIcon],svg[material-symbols-remove-moderator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.85 16.05l-1.5-1.55q.3-.8.475-1.662T18 11.1V6.375l-6-2.25L8.35 5.5L6.8 3.95L12 2l8 3v6.1q0 1.275-.288 2.525t-.862 2.425m.95 6.55l-3.25-3.25q-.95.975-2.113 1.638T12 22q-3.475-.875-5.738-3.988T4 11.1V6.8L1.4 4.2l1.4-1.4l18.4 18.4zM12 19.9q.875-.275 1.675-.775t1.475-1.175L6 8.8v2.3q0 3.025 1.7 5.5t4.3 3.3"></svg:path>`,
})
export class MaterialSymbolsRemoveModeratorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
