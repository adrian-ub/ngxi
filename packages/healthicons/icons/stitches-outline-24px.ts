import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesOutline24pxIcon],svg[healthicons-stitches-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 19.726V22h1.5v-2.272c1.272-.077 2.105-.353 2.697-.73q.026.002.053.002a1 1 0 1 0-.98-1.195c-.346.186-.883.358-1.77.42v-4.497c1.272-.077 2.105-.353 2.697-.73q.026.003.053.002a1 1 0 1 0-.98-1.195c-.346.186-.883.358-1.77.42V7.729c1.272-.077 2.105-.353 2.697-.73L15.5 7a1 1 0 1 0-.98-1.195c-.346.186-.883.358-1.77.42V2h-1.5v4.221a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.262a1 1 0 1 0-.804 1.269c.25.145.536.287.876.407c.47.166 1.024.283 1.718.33v4.496a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.261a1 1 0 1 0-.804 1.268c.25.145.536.287.876.407c.47.166 1.024.283 1.718.33v4.496a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.262a1 1 0 1 0-.804 1.269c.25.145.536.287.876.407c.47.166 1.024.282 1.718.33"></svg:path>`,
})
export class HealthiconsStitchesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
