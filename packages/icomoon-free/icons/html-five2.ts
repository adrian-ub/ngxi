import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHtmlFive2Icon],svg[icomoon-free-html-five2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0zm11.722 13.482l-4.644 1.287v.007l-.012-.004l-.012.004v-.007l-4.644-1.287L2.258 1.178h11.508zm-2.5-5.198l-.204 2.29l-1.972.532l-1.967-.53l-.126-1.41H4.126l.247 2.774l3.626 1.003l3.615-1.003l.485-5.422H5.662l-.161-1.809h6.758l.158-1.766H3.57l.477 5.341z"></svg:path>`,
})
export class IcomoonFreeHtmlFive2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
