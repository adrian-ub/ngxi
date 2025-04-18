import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlazaIcon],svg[hugeicons-plaza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M4 22V6.751c0-.624 0-.936.168-1.187c.168-.25.47-.39 1.076-.67l4.5-2.076c1.46-.673 2.189-1.01 2.722-.705C13 2.417 13 3.17 13 4.675V22m7 0V11.236c0-.601 0-.902-.174-1.144c-.175-.241-.488-.376-1.116-.645L13 7M7.5 9h2m-2 4h2m-2 4h2" color="currentColor"></svg:path>`,
})
export class HugeiconsPlazaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
