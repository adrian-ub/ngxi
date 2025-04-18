import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddStarburst20Icon],svg[fluent-color-add-starburst-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddStarburst200)" d="M11.092 1.29a.75.75 0 0 0-1.184 0L8.844 2.658a.5.5 0 0 1-.583.157L6.657 2.16a.75.75 0 0 0-1.025.592L5.395 4.47a.5.5 0 0 1-.427.427l-1.716.237a.75.75 0 0 0-.592 1.025l.653 1.604a.5.5 0 0 1-.157.583L1.79 9.408a.75.75 0 0 0 0 1.185l1.366 1.063a.5.5 0 0 1 .157.583l-.653 1.604a.75.75 0 0 0 .592 1.025l1.716.237a.5.5 0 0 1 .427.427l.237 1.716a.75.75 0 0 0 1.025.592l1.604-.653a.5.5 0 0 1 .583.157l1.064 1.366a.75.75 0 0 0 1.184 0l1.063-1.366a.5.5 0 0 1 .583-.157l1.604.653a.75.75 0 0 0 1.025-.592l.237-1.716a.5.5 0 0 1 .427-.427l1.716-.237a.75.75 0 0 0 .592-1.025l-.653-1.604a.5.5 0 0 1 .157-.583l1.366-1.064a.75.75 0 0 0 0-1.184l-1.366-1.063a.5.5 0 0 1-.157-.583l.653-1.604a.75.75 0 0 0-.592-1.025l-1.716-.237a.5.5 0 0 1-.426-.427l-.238-1.716a.75.75 0 0 0-1.025-.592l-1.604.653a.5.5 0 0 1-.583-.157z"></svg:path><svg:path fill="url(#fluentColorAddStarburst201)" fill-opacity=".95" d="M6.5 10a.5.5 0 0 1 .5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3H7a.5.5 0 0 1-.5-.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorAddStarburst200" cx="0" cy="0" r="1" gradientTransform="matrix(-19.58616 -34.63252 33.172 -18.76018 22.147 21.623)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC470"></svg:stop><svg:stop offset=".251" stop-color="#FF835C"></svg:stop><svg:stop offset=".55" stop-color="#F24A9D"></svg:stop><svg:stop offset=".814" stop-color="#B339F0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAddStarburst201" x1="13.944" x2="5.55" y1="16.259" y2="10.821" gradientUnits="userSpaceOnUse"><svg:stop offset=".024" stop-color="#FFC8D7"></svg:stop><svg:stop offset=".807" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddStarburst20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
