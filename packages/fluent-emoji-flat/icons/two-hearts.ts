import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTwoHeartsIcon],svg[fluent-emoji-flat-two-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F92F60" d="M23.5 3.77s1.005-1.478 2.324-1.7c3.259-.54 4.598 2.172 4.06 4.19C28.92 9.852 23.5 13 23.5 13s-5.42-3.148-6.384-6.74c-.538-2.018.801-4.73 4.06-4.19c1.309.222 2.324 1.7 2.324 1.7M12.006 14.894s1.558-2.415 3.586-2.779c5.014-.889 7.071 3.547 6.222 6.851C20.326 24.856 11.996 30 11.996 30s-8.33-5.153-9.818-11.034c-.83-3.304 1.238-7.74 6.242-6.85c2.028.363 3.586 2.778 3.586 2.778"></svg:path>`,
})
export class FluentEmojiFlatTwoHeartsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
