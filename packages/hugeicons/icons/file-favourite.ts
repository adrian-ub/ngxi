import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileFavouriteIcon],svg[hugeicons-file-favourite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 12v4.18c0 1.694 0 2.54.268 3.217c.43 1.088 1.342 1.945 2.497 2.35c.718.253 1.618.253 3.417.253c3.148 0 4.722 0 5.98-.442c2.02-.71 3.615-2.21 4.37-4.113c.468-1.184.468-2.666.468-5.63V9.27c0-3.07 0-4.605-.848-5.672a4.1 4.1 0 0 0-.855-.805C18.385 2.15 17.15 2.024 15 2"></svg:path><svg:path d="M21 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 11 22M4.142 2.442c1.207-.732 2.26-.437 2.893.032c.259.193.389.289.465.289s.206-.096.465-.289c.633-.469 1.686-.764 2.893-.032c1.584.959 1.942 4.124-1.71 6.795C8.45 9.745 8.103 10 7.5 10s-.951-.255-1.647-.763C2.2 6.567 2.558 3.4 4.142 2.442"></svg:path></svg:g>`,
})
export class HugeiconsFileFavouriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
