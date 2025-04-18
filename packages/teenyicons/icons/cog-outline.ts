import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCogOutlineIcon],svg[teenyicons-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" clip-rule="evenodd"><svg:path d="m5.944.5l-.086.437l-.329 1.598a5.5 5.5 0 0 0-1.434.823L2.487 2.82l-.432-.133l-.224.385L.724 4.923L.5 5.31l.328.287l1.244 1.058c-.045.277-.103.55-.103.841s.058.565.103.842L.828 9.395L.5 9.682l.224.386l1.107 1.85l.224.387l.432-.135l1.608-.537c.431.338.908.622 1.434.823l.329 1.598l.086.437h3.111l.087-.437l.328-1.598a5.5 5.5 0 0 0 1.434-.823l1.608.537l.432.135l.225-.386l1.106-1.851l.225-.386l-.329-.287l-1.244-1.058c.046-.277.103-.55.103-.842c0-.29-.057-.564-.103-.841l1.244-1.058l.329-.287l-.225-.386l-1.106-1.85l-.225-.386l-.432.134l-1.608.537a5.5 5.5 0 0 0-1.434-.823L9.142.937L9.055.5z"></svg:path><svg:path d="M9.5 7.495a2 2 0 0 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g>`,
})
export class TeenyiconsCogOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
