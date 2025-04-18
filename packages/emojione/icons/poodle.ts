import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePoodleIcon],svg[emojione-poodle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc5d3" d="M55.3 31.2c-.2 0-.3-.1-.5-.2c-.3-.3-.4-.7-.1-1.1c1.1-1.4 3.5-4.4 1-10.4c-.2-.4 0-.8.4-1s.8 0 1 .4c2.8 6.8 0 10.4-1.3 11.9c-.1.3-.3.4-.5.4M41.8 36v17.3c0 2.1 1 3 2.3 3s2.3-.9 2.3-3V36z"></svg:path><svg:ellipse cx="44.1" cy="50.7" fill="#ff78b5" rx="4.6" ry="2.2"></svg:ellipse><svg:ellipse cx="46.7" cy="35.4" fill="#e86097" rx="13.2" ry="11.4"></svg:ellipse><svg:ellipse cx="56.4" cy="19.3" fill="#ff78b5" rx="3.6" ry="3"></svg:ellipse><svg:path fill="#ffc5d3" d="M53 43v10.3c0 2.1 1 3 2.3 3s2.3-.9 2.3-3V41c-2 1.8-4.6 2-4.6 2"></svg:path><svg:ellipse cx="55.3" cy="50.7" fill="#ff78b5" rx="4.6" ry="2.2"></svg:ellipse><svg:path fill="#ffc5d3" d="M15 35.3V58c0 2.8 1.4 4 3 4c1.7 0 3-1.2 3-4V35.3zm14.7 0V58c0 2.8 1.4 4 3 4c1.7 0 3-1.2 3-4V35.3z"></svg:path><svg:g fill="#ff78b5"><svg:ellipse cx="18.1" cy="54.5" rx="6.1" ry="3"></svg:ellipse><svg:ellipse cx="32.8" cy="54.5" rx="6.1" ry="3"></svg:ellipse></svg:g><svg:ellipse cx="25.4" cy="29.4" fill="#e86097" rx="20" ry="19.6"></svg:ellipse><svg:path fill="#ff78b5" d="M14.4 33.4c0 7.7-2.3 8.9-5.2 8.9S4 36.1 4 28.4s5.4-13.9 8.3-13.9s2.1 11.2 2.1 18.9m22.1 0c0 7.7 2.3 8.9 5.2 8.9s5.2-6.2 5.2-13.9s-5.4-13.9-8.3-13.9c-2.8 0-2.1 11.2-2.1 18.9"></svg:path><svg:path fill="#ffc5d3" d="M40.4 22.2c0 7-2.5 6.5-6.3 11.6c-2.4 3.2-2.7 7.8-8.6 7.8s-6.2-4.5-8.6-7.8c-3.8-5.1-6.4-4.6-6.4-11.6c0-6.2 6.7-6.4 15-6.4c8.2 0 14.9.2 14.9 6.4"></svg:path><svg:path fill="#fff" d="M17.3 19.8c2.8 0 5.1 2.1 5.1 4.7s-2.3 4.7-5.1 4.7s-5.1-2.1-5.1-4.7s2.3-4.7 5.1-4.7"></svg:path><svg:ellipse cx="17.3" cy="24.5" fill="#3e4347" rx="3.5" ry="3.3"></svg:ellipse><svg:ellipse cx="33.6" cy="24.5" fill="#fff" rx="5.1" ry="4.7"></svg:ellipse><svg:g fill="#3e4347"><svg:ellipse cx="33.6" cy="24.5" rx="3.5" ry="3.3"></svg:ellipse><svg:path d="M20.1 36.6c0-2.3 2.4-2.8 5.3-2.8s5.3.5 5.3 2.8c0 1.9-4.2 3.5-5.3 3.5s-5.3-1.6-5.3-3.5"></svg:path></svg:g><svg:path fill="none" stroke="#3e4347" stroke-miterlimit="10" d="M25.4 41.6v-2.1"></svg:path><svg:g fill="#ff78b5"><svg:ellipse cx="13.3" cy="13.6" rx="7" ry="6.6"></svg:ellipse><svg:ellipse cx="37.6" cy="13.6" rx="7" ry="6.6"></svg:ellipse><svg:ellipse cx="25.4" cy="11" rx="9.5" ry="9"></svg:ellipse></svg:g>`,
})
export class EmojionePoodleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
