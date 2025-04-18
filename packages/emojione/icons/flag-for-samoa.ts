import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForSamoaIcon],svg[emojione-flag-for-samoa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 2v30H2c0 16.6 13.4 30 30 30s30-13.4 30-30S48.6 2 32 2"></svg:path><svg:path fill="#2a5f9e" d="M32 2C15.4 2 2 15.4 2 32h30z"></svg:path><svg:path fill="#fff" d="m19 13.1l1.2.9l-.4-1.5l1.2-1h-1.5L19 10l-.5 1.5H17l1.2 1l-.4 1.5zm0 14l1.2.9l-.4-1.5l1.2-1h-1.5L19 24l-.5 1.5H17l1.2 1l-.4 1.5zm-5-9l1.2.9l-.4-1.5l1.2-1h-1.5L14 15l-.5 1.5H12l1.2 1l-.4 1.5zm10 0l1.2.9l-.4-1.5l1.2-1h-1.5L24 15l-.5 1.5H22l1.2 1l-.4 1.5zm-2 4.4l.6.5l-.2-.8l.6-.4h-.8L22 21l-.2.8H21l.6.4l-.2.8z"></svg:path>`,
})
export class EmojioneFlagForSamoaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
