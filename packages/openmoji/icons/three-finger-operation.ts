import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiThreeFingerOperationIcon],svg[openmoji-three-finger-operation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="27.339" cy="18.233" r="6.37" fill="#fff"></svg:circle><svg:circle cx="35.03" cy="15.171" r="6.37" fill="#fff"></svg:circle><svg:circle cx="41.88" cy="18.883" r="6.37" fill="#fff"></svg:circle><svg:path fill="#fcea2b" d="M30.615 20.738a3.531 3.531 0 1 0-7-.095l-.257 18.998l.022 4.325l.006-4.999c.284-1.93-.88-3.724-2.81-4.008a3.53 3.53 0 0 0-4.02 3.913l-.176 5l.053 10.084c.425 8.31 7.752 13.63 16.06 13.205a19.62 19.62 0 0 0 12.728-5.657c2.918-3.09 10.085-11.535 10.085-11.535c1.463-2.158.329-5.494-.8-4.673l-9.876 4.651l-.039-5.4l.039 5.4l-.039-5.4l.04-21.85a3.531 3.531 0 1 0-7-.095l-.094 7l-.186 10.636l.367-22.192a3.531 3.531 0 1 0-7-.095l-.206 24.016"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M23.4 24.976A7.735 7.735 0 1 1 33.854 14"></svg:path><svg:path d="M27.357 16.564q-.091-.586-.092-1.197a7.735 7.735 0 1 1 14.785 3.187"></svg:path><svg:path d="M35.899 14a7.735 7.735 0 1 1 9.225 12.031"></svg:path><svg:path d="M30.615 20.738a3.531 3.531 0 1 0-7-.095l-.257 18.998l.005.951l-.006-1.625c.284-1.93-.851-3.724-2.78-4.008a3.53 3.53 0 0 0-4.008 2.98c-.046.309-.05 1.75-.013 2.061l-.176 3.871l.053 10.085c.425 8.31 7.752 13.63 16.06 13.205a19.62 19.62 0 0 0 12.728-5.657c2.918-3.09 10.085-11.535 10.085-11.535c1.463-2.158.329-5.494-.8-4.673l-9.876 4.651l-.039-5.4l.039 5.4l-.039-5.4l.04-21.85a3.531 3.531 0 1 0-7-.095l-.094 7l-.186 10.636l.367-22.192a3.531 3.531 0 1 0-7-.095l-.175 20.454"></svg:path></svg:g>`,
})
export class OpenmojiThreeFingerOperationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
