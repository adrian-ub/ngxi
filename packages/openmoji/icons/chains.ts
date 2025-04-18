import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChainsIcon],svg[openmoji-chains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="35.253" cy="15.34" fill="#fff" rx="3.848" ry="4.664"></svg:ellipse><svg:ellipse cx="35.338" cy="36.02" fill="#fff" rx="3.848" ry="4.664"></svg:ellipse><svg:ellipse cx="35.508" cy="57.039" fill="#fff" rx="3.848" ry="4.664"></svg:ellipse><svg:path fill="#d0cfce" d="M42.635 12.448a7.394 7.394 0 0 0-14.727.93v3.801a7.393 7.393 0 0 0 14.784 0v-3.801q0-.473-.057-.93m-3.088 3.922a4.247 4.247 0 1 1-8.494 0v-2.184a4.247 4.247 0 0 1 8.494 0zm3.088 16.892a7.394 7.394 0 0 0-14.727.93v3.802a7.393 7.393 0 0 0 14.784 0v-3.802q0-.473-.057-.93m-3.088 3.922a4.247 4.247 0 1 1-8.494 0V35a4.247 4.247 0 0 1 8.494 0zm3.088 16.892a7.394 7.394 0 0 0-14.727.93v3.802a7.393 7.393 0 0 0 14.784 0v-3.802q0-.473-.057-.93m-3.088 3.922a4.247 4.247 0 1 1-8.494 0v-2.184a4.247 4.247 0 0 1 8.494 0z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M39.547 57.999a4.247 4.247 0 1 1-8.494 0v-2.185a4.247 4.247 0 0 1 8.494 0z"></svg:path><svg:path d="M42.693 58.807a7.392 7.392 0 1 1-14.785 0v-3.802a7.392 7.392 0 1 1 14.785 0zm-3.146-21.622a4.247 4.247 0 1 1-8.494 0V35a4.247 4.247 0 0 1 8.494 0z"></svg:path><svg:path d="M42.693 37.993a7.392 7.392 0 1 1-14.785 0v-3.802a7.392 7.392 0 1 1 14.785 0zM39.547 16.37a4.247 4.247 0 1 1-8.494 0v-2.184a4.247 4.247 0 0 1 8.494 0z"></svg:path><svg:path d="M42.693 17.18a7.392 7.392 0 1 1-14.785 0v-3.802a7.392 7.392 0 1 1 14.785 0zM35.5 38.892V54m0-36.069v15.108"></svg:path></svg:g>`,
})
export class OpenmojiChainsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
