import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEjectButtonIcon],svg[openmoji-eject-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M54.41 48.066c.165-.45.275-.956.275-1.462c0-.787-.275-1.574-.716-2.248L39.145 16.529l-.276-.281c-.716-.73-1.598-1.124-2.59-1.124s-1.928.393-2.59 1.124l-.275.281l-14.935 27.827c-.772 1.012-.937 2.473-.441 3.71c.55 1.405 1.928 2.305 3.416 2.305h29.537c1.488 0 2.865-.9 3.416-2.305z"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round"><svg:path stroke-width="1.909" d="M54.807 48.51a4.4 4.4 0 0 0 .283-1.505c0-.81-.283-1.62-.737-2.314L39.1 16.06l-.283-.289c-.737-.752-1.645-1.156-2.665-1.156s-1.985.404-2.665 1.156l-.284.29l-15.367 28.632c-.794 1.04-.964 2.545-.454 3.817c.567 1.446 1.985 2.372 3.516 2.372h30.39c1.532 0 2.95-.926 3.516-2.372z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M17 57.38h38"></svg:path></svg:g>`,
})
export class OpenmojiEjectButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
