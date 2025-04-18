import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorListNumbersSolidIcon],svg[bubbles-editor-list-numbers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#bubblesEditorListNumbersSolid0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M.333 2.084a.5.5 0 0 1 .5-.5h.4a.9.9 0 0 1 .642.276a.93.93 0 0 1 .256.64v2.415h.297a.5.5 0 0 1 0 1H.833a.5.5 0 0 1 0-1h.298V2.584H.833a.5.5 0 0 1-.5-.5m4.283 1.665a1 1 0 0 1 1-1h13.55a1 1 0 1 1 0 2H5.616a1 1 0 0 1-1-1m0 6.666a1 1 0 0 1 1-1h13.55a1 1 0 1 1 0 2H5.616a1 1 0 0 1-1-1m1 5.666a1 1 0 0 0 0 2h13.55a1 1 0 1 0 0-2zM1.7 15.935a.27.27 0 0 0-.152-.013c-.05.01-.1.036-.141.076a.34.34 0 0 0-.09.16a.5.5 0 1 1-.969-.25c.061-.237.185-.454.36-.625a1.26 1.26 0 0 1 1.358-.277c.23.09.427.244.572.441a1.37 1.37 0 0 1-.024 1.636q.09.117.153.251a1.37 1.37 0 0 1-.129 1.382c-.144.198-.34.352-.568.444a1.26 1.26 0 0 1-1.358-.271a1.34 1.34 0 0 1-.363-.622a.5.5 0 0 1 .966-.256a.34.34 0 0 0 .092.158q.064.06.141.076q.076.015.151-.014a.3.3 0 0 0 .131-.104q.056-.076.066-.176a.4.4 0 0 0-.033-.19a.3.3 0 0 0-.114-.133a.27.27 0 0 0-.148-.045a.5.5 0 0 1 0-1q.078 0 .15-.045a.3.3 0 0 0 .113-.133a.37.37 0 0 0-.033-.366a.3.3 0 0 0-.131-.104M1.428 9.34a.28.28 0 0 1 .203-.09a.28.28 0 0 1 .202.09a.35.35 0 0 1 .095.243a.73.73 0 0 1-.146.44L.436 11.778a.5.5 0 0 0 .397.804h1.595a.5.5 0 1 0 0-1h-.582l.73-.954c.23-.3.352-.668.352-1.046c0-.346-.132-.683-.372-.935a1.28 1.28 0 0 0-.925-.398a1.28 1.28 0 0 0-.925.398a1.35 1.35 0 0 0-.373.935a.5.5 0 1 0 1 0c0-.095.037-.182.095-.243" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesEditorListNumbersSolid0"><svg:path fill="#fff" d="M0 0h20v20H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesEditorListNumbersSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
