import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFaceWithSymbolsOnMouthIcon],svg[fluent-emoji-flat-face-with-symbols-on-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F8312F" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M10.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M14.999 11.29a.75.75 0 0 0-.71-.789c-.828-.044-1.504-.241-2.039-.613c-.527-.367-.979-.948-1.289-1.876a.75.75 0 1 0-1.422.476c.394 1.18 1.019 2.049 1.854 2.63c.828.577 1.8.827 2.817.881a.75.75 0 0 0 .789-.71m2.002.001a.75.75 0 0 1 .709-.789c.83-.044 1.505-.241 2.04-.613c.526-.367.978-.948 1.289-1.876a.75.75 0 1 1 1.422.476c-.394 1.18-1.019 2.049-1.854 2.63c-.828.577-1.8.827-2.817.881a.75.75 0 0 1-.789-.71M14 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="#533566" d="M7 21.5A1.5 1.5 0 0 1 8.5 20h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 7 27.5z"></svg:path><svg:path fill="#fff" d="M12.176 22.032a.5.5 0 0 1 .292.644l-.121.324h1.431l.254-.675a.5.5 0 0 1 .936.35l-.121.325H15a.5.5 0 0 1 0 1h-.528l-.375 1h.403a.5.5 0 0 1 0 1h-.778l-.254.676a.5.5 0 0 1-.936-.351l.121-.325h-1.431l-.254.676a.5.5 0 0 1-.936-.351l.121-.325H10a.5.5 0 1 1 0-1h.528l.375-1H10.5a.5.5 0 1 1 0-1h.778l.254-.675a.5.5 0 0 1 .644-.293M13.403 24h-1.431l-.375 1h1.431zm5.565-1.324a.5.5 0 0 0-.936-.351l-1.5 4a.5.5 0 0 0 .936.35zM19 27a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3-4.5a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0zm-5.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m5.5 3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFaceWithSymbolsOnMouthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
