import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSearchBoxSolidIcon],svg[stash-search-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.945 8.257a.516.516 0 0 0-.575.856c.438.294.774.741.922 1.29a.516.516 0 0 0 .996-.266a3.28 3.28 0 0 0-1.343-1.88"></svg:path><svg:path fill="currentColor" d="M21.338 6.662a5.675 5.675 0 0 0-8.502 7.486l-1.75 2.189a1.29 1.29 0 1 0 2.014 1.611l1.736-2.17a5.678 5.678 0 0 0 6.502-9.116m-6.567 1.46a3.611 3.611 0 1 1 5.107 5.107a3.611 3.611 0 0 1-5.107-5.108M4.87 7.082a3.87 3.87 0 0 0 0 7.739h4.127a.774.774 0 0 0 0-1.548H4.869a2.322 2.322 0 1 1 0-4.643h6.192a.774.774 0 1 0 0-1.548z"></svg:path><svg:path fill="currentColor" d="M3.838 10.951c0-.57.462-1.031 1.031-1.031h4.644a1.032 1.032 0 1 1 0 2.063H4.869c-.57 0-1.031-.462-1.031-1.032"></svg:path>`,
})
export class StashSearchBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
