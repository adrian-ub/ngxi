import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMangoIcon],svg[twemoji-mango-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77B255" d="M26.38 3.539c.483-.039 1.259-.655 1.664-.595s1.573 1.078 1.67 1.283s-.637 1.178-.746 1.48s-.64.239-1.51-.543c-.869-.782-1.078-1.625-1.078-1.625"></svg:path><svg:path fill="#EA564B" d="M12.3 3.139c4.545-2.66 11.267-2.611 13.685-.58c1.617 1.358 2.942 2.401 4.474 3.011c2.022.804 3.692 3.154 4.415 5.384c.981 3.023 1.68 12.579-8.029 18.516c-6.233 3.812-17.656 5.363-18.961 4.723c-.984-.483-4.621-2.09-6.675-6.453S-1.324 11.111 12.3 3.139"></svg:path><svg:path fill="#F97253" d="M17.329 2.607C22.578 1.125 26.5 4.743 24.078 5c-4.359.463-9.015 4.969-12.625 8.375c-6.625 6.25-8.125 13.75-9 12.5c-1.424-2.034-1.468-9.148 3.561-15.386s9.104-7.257 11.315-7.882"></svg:path><svg:path fill="#77B255" d="M28.271 4.278c2.174.697 4.987 4.564 4.944 7.811c-.114 8.655-4.132 11.992-4.132 11.992s-2.551-9.325-2.171-12.719c.278-2.478 1.646-3.166 1.891-4.569c.229-1.305-.532-2.515-.532-2.515"></svg:path>`,
})
export class TwemojiMangoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
