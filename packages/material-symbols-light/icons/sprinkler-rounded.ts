import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSprinklerRoundedIcon],svg[material-symbols-light-sprinkler-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.77q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m0-4q-.31 0-.54-.23T11.23 7t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m0-4q-.31 0-.54-.23T11.23 3t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m3 10q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m2.825-2.85q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m2.825-2.8q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23M9 13.77q-.31 0-.54-.23T8.23 13t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m-2.825-2.85q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23M3.35 8.12q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m8.15 9.38H8q-.213 0-.356-.144t-.144-.357t.144-.356T8 16.5h8q.213 0 .356.144t.144.357t-.144.356T16 17.5h-3.5V21q0 .213-.144.356t-.357.144t-.356-.144T11.5 21z"></svg:path>`,
})
export class MaterialSymbolsLightSprinklerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
