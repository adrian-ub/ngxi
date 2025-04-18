import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardKeysRoundedIcon],svg[material-symbols-light-keyboard-keys-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.77q-.31 0-.54-.221q-.23-.22-.23-.549q0-.31.23-.54t.54-.23h8q.31 0 .54.221q.23.22.23.549q0 .31-.23.54t-.54.23zm-4-8q-.31 0-.54-.23T3.23 8t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23T7.23 8t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23T11.23 8t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23T15.23 8t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23T19.23 8t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m0 4q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m-4 0q-.31 0-.54-.23T7.23 12t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m-4 0q-.31 0-.54-.23T3.23 12t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardKeysRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
