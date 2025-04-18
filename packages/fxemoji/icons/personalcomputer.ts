import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiPersonalcomputerIcon],svg[fxemoji-personalcomputer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ADB8BC" d="M215.5 343.369h81v135.144h-81z"></svg:path><svg:path fill="#C5CFD1" d="M63.044 449.745h385.911c11.532 0 20.88 9.348 20.88 20.88v7.37c0 11.532-9.348 20.88-20.88 20.88H63.044c-11.532 0-20.88-9.348-20.88-20.88v-7.37c0-11.532 9.349-20.88 20.88-20.88M20.828 47.298h470.343c7.953 0 14.4 6.447 14.4 14.4v334.843c0 7.953-6.447 14.4-14.4 14.4H20.828c-7.953 0-14.4-6.447-14.4-14.4V61.698c0-7.953 6.447-14.4 14.4-14.4"></svg:path><svg:path fill="#00B1FF" d="M62.768 93.087h386.463c7.953 0 14.4 6.447 14.4 14.4v243.265c0 7.953-6.447 14.4-14.4 14.4H62.768c-7.953 0-14.4-6.447-14.4-14.4V107.487c0-7.953 6.447-14.4 14.4-14.4"></svg:path><svg:circle cx="428.681" cy="388.046" r="12.319" fill="#D7F4F7"></svg:circle><svg:path fill="#8F9799" d="M365.016 397.127h28.187a9.08 9.08 0 0 0 9.082-9.082a9.08 9.08 0 0 0-9.082-9.082h-28.187a9.08 9.08 0 0 0-9.082 9.082c.001 5.016 4.067 9.082 9.082 9.082"></svg:path>`,
})
export class FxemojiPersonalcomputerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
