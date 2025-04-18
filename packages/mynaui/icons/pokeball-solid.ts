import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPokeballSolidIcon],svg[mynaui-pokeball-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M9.353 11.25a2.751 2.751 0 0 1 5.293 0h7.075c-.383-5.034-4.589-9-9.721-9c-5.133 0-9.339 3.966-9.722 9zm5.293 1.5a2.751 2.751 0 0 1-5.293 0H2.278c.383 5.034 4.59 9 9.722 9s9.339-3.966 9.721-9z"></svg:path></svg:g>`,
})
export class MynauiPokeballSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
