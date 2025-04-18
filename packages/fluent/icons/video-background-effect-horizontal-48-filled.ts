import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoBackgroundEffectHorizontal48FilledIcon],svg[fluent-video-background-effect-horizontal-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.374 10.5A4.25 4.25 0 0 1 8.248 8h31.5a4.25 4.25 0 0 1 3.874 2.5zm39.625 5H30.615a8 8 0 0 1 1.133 2.5h12.251zM4 15.5h13.385a8 8 0 0 0-1.133 2.5H4zm0 7.25h12.485a8 8 0 0 0 1.479 2.5H4zM4 30h8.15c-.098.4-.15.82-.15 1.25v1.25H4zm32 1.25v1.25h7.999V30H35.85c.098.4.15.82.15 1.25M4.375 37.5H12V40H8.25a4.25 4.25 0 0 1-3.875-2.5M36 37.5V40h3.75a4.25 4.25 0 0 0 3.873-2.5zm-4.485-14.75a8 8 0 0 1-1.479 2.5H44v-2.5zM14 40v-8.75A3.25 3.25 0 0 1 17.25 28h13.5A3.25 3.25 0 0 1 34 31.25V40zm16-20a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class FluentVideoBackgroundEffectHorizontal48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
