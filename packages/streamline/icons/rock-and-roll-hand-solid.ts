import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRockAndRollHandSolidIcon],svg[streamline-rock-and-roll-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.695 9.755c-.185 1.482-.04 3.306 1.873 4.17a.9.9 0 0 0 .369.075h6.393a1 1 0 0 0 .707-.293l.09-.09a4.67 4.67 0 0 0 1.368-3.3V3.792a1.458 1.458 0 1 0-2.917 0v2.25c-1.74-.782-2.17-.86-4.083-.584v-4a1.458 1.458 0 0 0-2.917 0v5.754H6.15a1.748 1.748 0 0 1 .809 3.299c.256.335.43.772.45 1.303a.625.625 0 1 1-1.248.047c-.015-.375-.171-.604-.34-.74c-.195-.155-.385-.175-.435-.167a.625.625 0 0 1-.254-1.223l1.14-.288a.498.498 0 0 0-.122-.98H2.553a1.77 1.77 0 0 0-.858 1.292" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRockAndRollHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
