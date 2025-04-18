import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEnglishMustacheIcon],svg[icon-park-outline-english-mustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.064 24.059c3.287-1.074 3.465-5.093 7.797-5.942c3.465-.679 5.547 1.709 6.064 4.244c.433 2.122-.866 7.639-7.797 7.639C7.465 30 4.578 24.483 4 22.361c.866.849 3.465 2.546 6.064 1.697Z"></svg:path><svg:path d="M37.936 24.059c-3.288-1.074-3.465-5.093-7.797-5.942c-3.465-.679-5.547 1.709-6.064 4.244c-.433 2.122.866 7.639 7.797 7.639c8.663 0 11.55-5.517 12.128-7.639c-.866.849-3.465 2.546-6.064 1.697Z"></svg:path></svg:g>`,
})
export class IconParkOutlineEnglishMustacheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
