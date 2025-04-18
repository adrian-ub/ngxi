import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderSearchLightIcon],svg[lets-icons-folder-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M19.5 12c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C18.107 8.5 17.404 8.5 16 8.5h-1.843c-.818 0-1.226 0-1.594-.152s-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02S8.66 5.5 7.843 5.5H7.5c-1.886 0-2.828 0-3.414.586S3.5 7.614 3.5 9.5v5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H12"></svg:path><svg:circle cx="16.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M19.5 19.5L21 21"></svg:path></svg:g>`,
})
export class LetsIconsFolderSearchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
