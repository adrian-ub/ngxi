import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchFocusIcon],svg[hugeicons-search-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path><svg:path d="M9.492 7.5c-.716.043-1.172.163-1.5.491c-.33.329-.449.785-.492 1.501M12.508 7.5c.716.043 1.172.163 1.5.491c.33.329.449.785.492 1.501m-.008 3.13c-.049.651-.173 1.076-.483 1.387c-.329.328-.785.448-1.501.491m-3.016 0c-.716-.043-1.172-.163-1.5-.491c-.311-.311-.435-.736-.484-1.388"></svg:path></svg:g>`,
})
export class HugeiconsSearchFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
