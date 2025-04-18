import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPurseIcon],svg[hugeicons-purse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M4 20a2 2 0 1 1 0-4c1.105 0 2 1.333 2 2s-.895 2-2 2m4 0c-1.105 0-2-1.5-2-2s.895-2 2-2a2 2 0 1 1 0 4"></svg:path><svg:path d="M13 20h3c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14v-1c0-2.828 0-4.243-.879-5.121c-.641-.642-1.568-.815-3.121-.862M10 7h6c.764 0 1.425 0 2 .017m0 0c0-.948 0-1.422-.157-1.795a2 2 0 0 0-1.065-1.065C16.405 4 15.93 4 14.983 4H10C6.229 4 4.343 4 3.172 5.172S2 7.229 2 11v2"></svg:path></svg:g>`,
})
export class HugeiconsPurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
