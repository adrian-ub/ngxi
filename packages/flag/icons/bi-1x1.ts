import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBi1x1Icon],svg[flag-bi-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBi1x10"><svg:path fill="gray" d="M60.8 337h175v175h-175z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagBi1x10)" transform="translate(-178 -986)scale(2.9257)"><svg:path fill="#18b637" d="m0 337l146.6 87.5L0 512zm293.1 0l-146.5 87.5L293 512z"></svg:path><svg:path fill="#cf0921" d="m0 337l146.6 87.5L293 337zm0 175l146.6-87.5L293 512z"></svg:path><svg:path fill="#fff" d="M293.1 337h-27.3L0 495.7V512h27.3l265.8-158.7z"></svg:path><svg:path fill="#fff" d="M197.2 424.5a50.6 50.6 0 1 1-101.2 0a50.6 50.6 0 0 1 101.2 0"></svg:path><svg:path fill="#fff" d="M0 337v16.3L265.8 512h27.3v-16.3L27.3 337z"></svg:path><svg:path fill="#cf0921" stroke="#18b637" stroke-width="1pt" d="m156.5 405.4l-6.6.1l-3.4 5.6l-3.4-5.6l-6.5-.1l3.2-5.8l-3.2-5.7l6.6-.2l3.4-5.6l3.4 5.7h6.5l-3.1 5.8zm-22 38.2h-6.6l-3.4 5.7l-3.4-5.6l-6.6-.2l3.2-5.7l-3.1-5.8l6.5-.1l3.4-5.6l3.4 5.6l6.6.2l-3.2 5.7zm44.6 0h-6.6l-3.4 5.7l-3.4-5.6l-6.5-.2l3.1-5.7l-3.1-5.8l6.6-.1l3.4-5.6l3.4 5.6l6.5.2l-3.2 5.7z"></svg:path></svg:g>`,
})
export class FlagBi1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
