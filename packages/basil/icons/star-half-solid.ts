import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilStarHalfSolidIcon],svg[basil-star-half-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2.462c0-.26-.208-.488-.45-.395a1 1 0 0 0-.504.431L8.833 7.175a1.25 1.25 0 0 1-.894.61l-5.086.767c-.855.13-1.154 1.208-.489 1.76l3.79 3.138c.35.29.515.75.43 1.197l-.992 5.205a1 1 0 0 0 1.449 1.072l4.79-2.522q.07-.037.143-.065c.271-.101.527-.322.527-.613z"></svg:path>`,
})
export class BasilStarHalfSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
