import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPizzaIcon],svg[openmoji-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" d="M52.264 19.737c.476.478.916.978 1.341 1.486l2.9-5.729c-11.324-11.325-29.687-11.325-41.01 0l2.9 5.729c.425-.508.865-1.008 1.341-1.486c8.984-8.983 23.544-8.983 32.528 0"></svg:path><svg:path fill="#fcea2b" d="M53.606 21.223a23 23 0 0 0-1.342-1.486c-8.984-8.983-23.544-8.983-32.528 0c-.476.478-.916.978-1.342 1.486L36 56z"></svg:path><svg:circle cx="31" cy="24" r="5" fill="#ea5a47"></svg:circle><svg:circle cx="44" cy="24" r="3" fill="#ea5a47"></svg:circle><svg:circle cx="37" cy="36" r="3" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M52.264 19.737c.476.478.916.978 1.341 1.486l2.9-5.729c-11.324-11.325-29.687-11.325-41.01 0l2.9 5.729c.425-.508.865-1.008 1.341-1.486c8.984-8.983 23.544-8.983 32.528 0"></svg:path><svg:path d="M53.606 21.223a23 23 0 0 0-1.342-1.486c-8.984-8.983-23.544-8.983-32.528 0c-.476.478-.916.978-1.342 1.486L36 56z"></svg:path><svg:circle cx="31" cy="24" r="5"></svg:circle><svg:circle cx="44" cy="24" r="3"></svg:circle><svg:circle cx="37" cy="36" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiPizzaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
