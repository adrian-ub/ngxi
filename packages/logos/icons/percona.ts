import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPerconaIcon],svg[logos-percona-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosPercona0" x1="50%" x2="50%" y1="0%" y2="100%"><svg:stop offset="0%" stop-color="#FBB32F"></svg:stop><svg:stop offset="50.474%" stop-color="#C11511"></svg:stop><svg:stop offset="100%" stop-color="#C11411"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosPercona0)" d="M128 .578C57.308.578 0 56.413 0 125.29c0 43.086 22.427 81.066 56.526 103.47V125.354c-.001-.158-.023-.31-.023-.467s.022-.31.023-.468v-.877h.043c.701-40.146 32.335-72.48 71.323-72.48c39.427 0 71.388 33.052 71.388 73.825c0 40.772-31.961 73.825-71.388 73.825c-15.356 0-29.543-5.062-41.187-13.592v58.207A130.8 130.8 0 0 0 128 250c70.692 0 128-55.835 128-124.71C256 56.412 198.692.577 128 .577"></svg:path><svg:path fill="#FCB42F" d="M171.197 127.472c0 23.59-19.123 42.713-42.713 42.713S85.77 151.062 85.77 127.472s19.124-42.713 42.714-42.713s42.713 19.123 42.713 42.713"></svg:path>`,
})
export class LogosPerconaIcon {
  readonly viewBox = input("0 0 256 250")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
