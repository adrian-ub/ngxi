import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEspressoMachineIcon],svg[openmoji-espresso-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48" height="48" x="12" y="12" fill="#9B9B9A" rx="1"></svg:rect><svg:path fill="#d0cfce" d="M24 26h23l-2 8H26z"></svg:path><svg:circle cx="35" cy="19" r="4" fill="#fff"></svg:circle><svg:path stroke="#D22F27" stroke-linecap="round" stroke-width="2" d="M35 19v-1"></svg:path><svg:path fill="#A57939" d="M18.152 15.358a1 1 0 0 1 1.696 0l.37.593a1 1 0 0 0 .814.47l.698.024a1 1 0 0 1 .848 1.469l-.328.616a1 1 0 0 0 0 .94l.328.616a1 1 0 0 1-.848 1.47l-.698.024a1 1 0 0 0-.814.47l-.37.592a1 1 0 0 1-1.696 0l-.37-.593a1 1 0 0 0-.814-.47l-.698-.024a1 1 0 0 1-.848-1.469l.328-.616a1 1 0 0 0 0-.94l-.328-.616a1 1 0 0 1 .848-1.47l.698-.024a1 1 0 0 0 .814-.47zM39 28c0 2.21 7.79 4 10 4a4 4 0 0 0 0-8c-2.21 0-10 1.79-10 4"></svg:path><svg:circle cx="53.5" cy="18.5" r="2.5" fill="#D22F27"></svg:circle><svg:path fill="#fff" d="M25 52h20l-2 3H27z"></svg:path><svg:g fill="#fff"><svg:path fill-rule="evenodd" d="M35 53c3.314 0 6-4.477 6-10H29c0 5.523 2.686 10 6 10" clip-rule="evenodd"></svg:path><svg:path d="M41 43h1a1 1 0 0 0-1-1zm-12 0v-1a1 1 0 0 0-1 1zm11 0c0 2.611-.637 4.927-1.615 6.557C37.395 51.206 36.168 52 35 52v2c2.146 0 3.918-1.445 5.1-3.414C41.294 48.596 42 45.91 42 43zm-11 1h12v-2H29zm6 8c-1.168 0-2.395-.794-3.385-2.443C30.637 47.927 30 45.61 30 43h-2c0 2.911.706 5.596 1.9 7.586C31.082 52.556 32.854 54 35 54z"></svg:path></svg:g><svg:circle cx="53.5" cy="18.5" r="2.5" fill="none" stroke="#D0CFCE" stroke-width="2"></svg:circle><svg:g stroke="#000" stroke-width="2"><svg:rect width="48" height="48" x="12" y="12" fill="none" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" d="M12 26h12"></svg:path><svg:path fill="none" stroke-linecap="round" d="M56 26h4"></svg:path><svg:path d="M12 55h48"></svg:path><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M40.5 26H24l2 8h18"></svg:path><svg:circle cx="35" cy="19" r="4" fill="none"></svg:circle><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M30.2 49c-.754-1.671-1.2-3.749-1.2-6h12c0 2.251-.446 4.329-1.2 6"></svg:path><svg:path fill="none" d="M18.152 15.358a1 1 0 0 1 1.696 0l.37.593a1 1 0 0 0 .814.47l.698.024a1 1 0 0 1 .848 1.469l-.328.616a1 1 0 0 0 0 .94l.328.616a1 1 0 0 1-.848 1.47l-.698.024a1 1 0 0 0-.814.47l-.37.592a1 1 0 0 1-1.696 0l-.37-.593a1 1 0 0 0-.814-.47l-.698-.024a1 1 0 0 1-.848-1.469l.328-.616a1 1 0 0 0 0-.94l-.328-.616a1 1 0 0 1 .848-1.47l.698-.024a1 1 0 0 0 .814-.47zM39 28c0 2.21 7.79 4 10 4a4 4 0 0 0 0-8c-2.21 0-10 1.79-10 4Z"></svg:path><svg:path fill="none" stroke-linecap="round" d="M53.5 21a2.5 2.5 0 0 1 0-5"></svg:path><svg:path fill="none" stroke-linejoin="round" d="M25 52h20l-2 3H27z"></svg:path></svg:g>`,
})
export class OpenmojiEspressoMachineIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
