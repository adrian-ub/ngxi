import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasHomeIcon],svg[pajamas-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.38 1.353L8 1.131l-.38.222l-7.25 4.25a.75.75 0 0 0 .76 1.294l.87-.51V14h12V6.387l.87.51a.75.75 0 1 0 .76-1.294zm4.12 4.154L8 2.87L3.5 5.507V12.5H6V8h4v4.5h2.5zM8.5 9.5v3h-1v-3z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasHomeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
