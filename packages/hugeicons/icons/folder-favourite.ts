import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderFavouriteIcon],svg[hugeicons-folder-favourite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.42.63.492 1.636.504 3.167M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535c1.3 1.3 3.304 1.447 7.036 1.463m3.642-6.556c1.207-.732 2.26-.437 2.893.032c.259.193.389.289.465.289s.206-.096.465-.289c.633-.469 1.686-.764 2.893-.032c1.584.959 1.942 4.124-1.71 6.795c-.697.508-1.044.763-1.648.763s-.951-.255-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderFavouriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
