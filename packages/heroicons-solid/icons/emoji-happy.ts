import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidEmojiHappyIcon],svg[heroicons-solid-emoji-happy-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M7 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.464 5.535a1 1 0 1 0-1.415-1.414a3 3 0 0 1-4.242 0a1 1 0 0 0-1.415 1.414a5 5 0 0 0 7.072 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidEmojiHappyIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
