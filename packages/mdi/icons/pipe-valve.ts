import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPipeValveIcon],svg[mdi-pipe-valve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v8h-2v-2h-3.42c-.77 1.76-2.53 3-4.58 3s-3.81-1.24-4.58-3H4v2H2v-8h2v2h3.43c.5-1.15 1.42-2.07 2.57-2.58V11H8V9h8v2h-2v1.42c1.15.51 2.07 1.43 2.57 2.58H20v-2zM17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h3v1h1v3h2V5h1V4h3c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiPipeValveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
