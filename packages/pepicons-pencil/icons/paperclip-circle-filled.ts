import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPaperclipCircleFilledIcon],svg[pepicons-pencil-paperclip-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPaperclipCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.455 6.188a4 4 0 0 1 5.79 5.521l-5.349 5.608a2.25 2.25 0 0 1-3.258-3.106l4.485-4.706a.5.5 0 1 1 .724.69L10.362 14.9a1.25 1.25 0 0 0 1.81 1.726l5.349-5.608a3 3 0 1 0-4.342-4.141l-4.831 5.066a.5.5 0 1 1-.724-.69z"></svg:path><svg:path d="M7.463 19.391c-.439-.419-.824-1.056-1.145-1.758c-.71-1.552-.17-3.383 1.097-4.712L11.8 8.325a.5.5 0 0 0-.724-.69l-4.383 4.596c-1.455 1.526-2.214 3.783-1.284 5.818c.342.747.791 1.518 1.365 2.066c.566.54 1.342.947 2.094 1.251c2.095.849 4.337-.039 5.791-1.593l5.692-6.081a.5.5 0 1 0-.73-.684l-5.692 6.082c-1.267 1.354-3.089 1.996-4.686 1.35c-.704-.286-1.346-.636-1.779-1.049"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPaperclipCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPaperclipCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
