import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsGiftTop16SolidIcon],svg[heroicons-gift-top-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 2H3.5A1.5 1.5 0 0 0 2 3.5v3.75h1.718A2.5 2.5 0 0 1 7.25 3.716zM2 8.75v3.75A1.5 1.5 0 0 0 3.5 14h3.75v-3.085a4.74 4.74 0 0 1-3.455 1.826a.75.75 0 1 1-.092-1.497a3.25 3.25 0 0 0 2.96-2.494zM8.75 14h3.75a1.5 1.5 0 0 0 1.5-1.5V8.75H9.337a3.25 3.25 0 0 0 2.96 2.494a.75.75 0 1 1-.093 1.497a4.74 4.74 0 0 1-3.454-1.826zM14 7.25h-1.718A2.5 2.5 0 0 0 8.75 3.717V2h3.75A1.5 1.5 0 0 1 14 3.5z"></svg:path><svg:path fill="currentColor" d="M6.352 6.787q.242.016.448.012c.002-.136 0-.289-.012-.448c-.043-.617-.203-1.181-.525-1.503a1 1 0 0 0-1.414 1.414c.322.322.886.482 1.503.525m3.297 0q-.242.016-.448.012c-.003-.136 0-.289.011-.448c.044-.617.203-1.181.526-1.503a1 1 0 1 1 1.414 1.414c-.322.322-.887.482-1.503.525"></svg:path>`,
})
export class HeroiconsGiftTop16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
