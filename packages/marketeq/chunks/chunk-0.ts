import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeq1stPlaceIcon],svg[marketeq-1st-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 18.75L25 16.667v16.666m-2.083 0h4.166"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class Marketeq1stPlaceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeq2ndPlaceIcon],svg[marketeq-2nd-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 33.333h-8.334A8.33 8.33 0 0 1 25 26.208L27.083 25a4.17 4.17 0 0 0 2.084-3.604v-.563A4.167 4.167 0 0 0 25 16.667v0a4.167 4.167 0 0 0-4.167 4.166"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class Marketeq2ndPlaceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeq3rdPlaceIcon],svg[marketeq-3rd-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 16.667h7.146a1.21 1.21 0 0 1 1.188 1.187v14.292a1.21 1.21 0 0 1-1.188 1.187h-7.146M22.917 25h6.25"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class Marketeq3rdPlaceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqActionCamIcon],svg[marketeq-action-cam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M34.27 14.583h.21"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M14.583 16.667h2.084"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M29.167 31.25h-8.334v12.5h8.334z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 22.917v6.25a2.083 2.083 0 0 1-2.084 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083v-18.75a2.083 2.083 0 0 1 2.083-2.084H25"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M43.75 20.833v-12.5c0-1.15-.933-2.083-2.083-2.083H27.083c-1.15 0-2.083.933-2.083 2.083v12.5c0 1.15.933 2.084 2.083 2.084h14.584c1.15 0 2.083-.933 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqActionCamIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAdapter3Icon],svg[marketeq-adapter-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 31.25v12.5m12.5-33.333h6.25zm0 8.333h6.25z"></svg:path><svg:path stroke="#306CFE" d="M16.667 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083v20.834a2.083 2.083 0 0 1-2.083 2.083H14.583a2.083 2.083 0 0 1-2.083-2.083v-18.75a4.167 4.167 0 0 1 4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqAdapter3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAddCollectionIcon],svg[marketeq-add-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 14.583v12.5m-6.25-6.25h12.5z"></svg:path><svg:path stroke="#306CFE" d="M14.583 43.75h27.084a2.083 2.083 0 0 0 2.083-2.083v-31.25"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25h-25c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h25c1.15 0 2.084-.933 2.084-2.084v-25c0-1.15-.933-2.083-2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqAddCollectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAddPlaylistIcon],svg[marketeq-add-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 39.583H43.75M29.167 31.25H43.75zm6.25-20.833h8.333zm4.166-4.167v8.333z"></svg:path><svg:path stroke="#306CFE" d="M13.542 43.75a7.292 7.292 0 1 0 0-14.583a7.292 7.292 0 0 0 0 14.583"></svg:path><svg:path stroke="#306CFE" d="M29.167 20.833a5.96 5.96 0 0 0-2.084-8.333a48.3 48.3 0 0 1-6.25-6.25v30.208"></svg:path></svg:g>`,
})
export class MarketeqAddPlaylistIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAddPlaylist2Icon],svg[marketeq-add-playlist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 39.583H43.75M29.167 31.25H43.75zm6.25-20.833h8.333zm4.166-4.167v8.333z"></svg:path><svg:path stroke="#306CFE" d="M20.833 36.458V6.25zm-7.291-7.291a7.292 7.292 0 1 0 0 14.583a7.292 7.292 0 0 0 0-14.583"></svg:path></svg:g>`,
})
export class MarketeqAddPlaylist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAgendaIcon],svg[marketeq-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v12.5l-4.167-2.083l-4.166 2.083V6.25zm18.75 8.333h-4.167v4.167h4.167zm0 12.5h-4.167v4.167h4.167z"></svg:path><svg:path stroke="#306CFE" d="M39.583 41.667V8.333c0-1.15-.932-2.083-2.083-2.083H10.417c-1.15 0-2.084.933-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083H37.5c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqAgendaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAgendaLeftIcon],svg[marketeq-agenda-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 25v14.583l-4.166 4.167l-4.167-4.167V25a2.083 2.083 0 0 1 2.083-2.083H12.5A2.083 2.083 0 0 1 14.583 25"></svg:path><svg:path stroke="#306CFE" d="M43.75 33.333h-4.167m4.167-16.666h-4.167zm0 8.333h-4.167zM22.917 43.75h16.666a2.084 2.084 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v6.25"></svg:path></svg:g>`,
})
export class MarketeqAgendaLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAimIcon],svg[marketeq-aim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m35.417 43.75l-3.625-12.5zm-20.834 0l3.625-12.5zM25 8.333V6.25zm4.167 12.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#344054" d="M25 33.333c6.904 0 12.5-5.596 12.5-12.5c0-6.903-5.596-12.5-12.5-12.5s-12.5 5.597-12.5 12.5c0 6.904 5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqAimIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAim2Icon],svg[marketeq-aim-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 8.333V6.25zm-4.167 25V43.75zm8.334 0V43.75zm-12.5 10.417h16.666zm12.5-22.917a4.166 4.166 0 1 0-8.332 0a4.166 4.166 0 0 0 8.332 0"></svg:path><svg:path stroke="#344054" d="M25 33.333c6.904 0 12.5-5.596 12.5-12.5c0-6.903-5.596-12.5-12.5-12.5s-12.5 5.597-12.5 12.5c0 6.904 5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqAim2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAlphaIcon],svg[marketeq-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.667 12.5s-7.438 27.083-22.813 27.083c-11.75 0-13.166-6.979-12.5-12.979c.834-6.583 6.875-16.187 16.021-16.187c14.583 0 9.063 29.166 21.375 29.166"></svg:path>`,
})
export class MarketeqAlphaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAlphaCircleIcon],svg[marketeq-alpha-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.417 19.646S28.937 31.25 22.292 31.25c-4 0-5.98-2.292-5.521-5.333c.5-3.438 3.354-7.167 6.791-7.167c6.459 0 3.709 12.5 9.771 12.5"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqAlphaCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAmbulanceIcon],svg[marketeq-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M10.083 35.417h-1.75a2.083 2.083 0 0 1-2.083-2.084V12.5a2.083 2.083 0 0 1 2.083-2.083h26.084a2.08 2.08 0 0 1 1.625.791l7.25 9.063c.294.366.455.822.458 1.292v11.77a2.084 2.084 0 0 1-2.083 2.084h-1.73m-8.917 0H19"></svg:path><svg:path stroke="#344054" d="M25 18.75v8.333m-6.25 8.334a4.166 4.166 0 1 1-8.332 0a4.166 4.166 0 0 1 8.332 0m20.833 0a4.166 4.166 0 1 1-8.332 0a4.166 4.166 0 0 1 8.332 0m-18.75-12.5h8.334z"></svg:path></svg:g>`,
})
export class MarketeqAmbulanceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAngel45Icon],svg[marketeq-angel-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 39.583a16.67 16.67 0 0 0-4.875-11.791"></svg:path><svg:path stroke="#306CFE" d="M43.75 39.583H6.25l29.167-29.166"></svg:path></svg:g>`,
})
export class MarketeqAngel45Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAppartment2Icon],svg[marketeq-appartment-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 22.917h8.334m0 20.833v-12.5h-8.334v12.5zm-8.334-29.167h8.334z"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75h-25V8.333A2.083 2.083 0 0 1 8.333 6.25h20.834a2.083 2.083 0 0 1 2.083 2.083zm0 0h12.5V18.167a2.084 2.084 0 0 0-1.417-2.084L31.25 12.5z"></svg:path></svg:g>`,
})
export class MarketeqAppartment2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAppleFruitIcon],svg[marketeq-apple-fruit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583a10.65 10.65 0 0 1 4.167-8.333"></svg:path><svg:path stroke="#306CFE" d="M41.5 25.792c-1.042 9.479-5.417 17.958-9.854 17.958c-2.896 0-3.563-2.083-6.646-2.083s-3.77 2.083-6.646 2.083c-4.437 0-8.812-8.48-9.854-17.958c-.73-6.73.958-10.917 5.042-12.625c5.208-2.188 8.146 1.416 11.458 1.416c3.313 0 6.25-3.604 11.438-1.416c4.083 1.708 5.812 5.895 5.062 12.625"></svg:path></svg:g>`,
})
export class MarketeqAppleFruitIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqArmchair4Icon],svg[marketeq-armchair-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 18.75v-4.167a8.333 8.333 0 0 1 8.333-8.333h8.334a8.333 8.333 0 0 1 8.333 8.333v4.167m-2.083 25v-4.167M14.583 43.75v-4.167z"></svg:path><svg:path stroke="#306CFE" d="M37.167 18.75a6.52 6.52 0 0 0-5.917 6.604v5.896h-12.5v-5.896a6.52 6.52 0 0 0-5.917-6.604a6.25 6.25 0 0 0-2.416 12.125V37.5a2.083 2.083 0 0 0 2.083 2.083h25a2.083 2.083 0 0 0 2.083-2.083v-6.625a6.25 6.25 0 0 0-2.416-12.125"></svg:path></svg:g>`,
})
export class MarketeqArmchair4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqArrivalIcon],svg[marketeq-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 43.75h37.5"></svg:path><svg:path stroke="#306CFE" d="m41.146 28.77l-.5 1.272a1.896 1.896 0 0 1-2.48 1.083L27.75 27.25a1.87 1.87 0 0 0-1.562 0l-6.48 3.042c-.401.192-.854.25-1.291.166L11.5 29l6.5-5.396l-8.125-3.041a2.46 2.46 0 0 1-1.542-2.355L8.854 6.25l4.48 1.083a2.33 2.33 0 0 1 1.75 1.938l.604 3.52l19.291 4.667a8.606 8.606 0 0 1 6.25 11.313z"></svg:path></svg:g>`,
})
export class MarketeqArrivalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAtomIcon],svg[marketeq-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 25c0 10.417-3.729 18.75-8.333 18.75S16.667 35.417 16.667 25S20.396 6.25 25 6.25s8.333 8.333 8.333 18.75M8.854 34.896c2.292 4.166 11.375 3.208 20.292-2.271c8.917-5.48 14.27-13.312 12-17.52c-2.271-4.21-11.375-3.21-20.313 2.27S6.583 30.688 8.854 34.895m32.292 0c2.27-4.167-3.084-12.042-12-17.521s-18-6.5-20.292-2.27c-2.291 4.228 3.084 11.978 11.98 17.52c8.895 5.542 18.02 6.5 20.312 2.27"></svg:path></svg:g>`,
})
export class MarketeqAtomIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAttachmentIcon],svg[marketeq-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37.5 20.833V31.25a12.5 12.5 0 0 1-25 0V14.583a8.333 8.333 0 0 1 8.333-8.333v0a8.333 8.333 0 0 1 8.334 8.333V31.25a4.167 4.167 0 1 1-8.334 0V14.583"></svg:path>`,
})
export class MarketeqAttachmentIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAvocadoIcon],svg[marketeq-avocado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 6.25A10.2 10.2 0 0 0 25 12.5"></svg:path><svg:path stroke="#306CFE" d="M34.396 28.125a26.5 26.5 0 0 1-2.688-8.333a7.79 7.79 0 0 0-3.208-6.25a6.4 6.4 0 0 0-7 0a7.8 7.8 0 0 0-3.208 6.25a26.5 26.5 0 0 1-2.688 8.333a16 16 0 0 0-1.02 6.375A9.896 9.896 0 0 0 25 43.75a9.896 9.896 0 0 0 10.417-9.25a16 16 0 0 0-1.021-6.375"></svg:path></svg:g>`,
})
export class MarketeqAvocadoIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAvocado2Icon],svg[marketeq-avocado-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417a5.56 5.56 0 0 1-5.208-5.834c0-3.208 2.333-8.75 5.208-8.75s5.208 5.542 5.208 8.75A5.563 5.563 0 0 1 25 35.417"></svg:path><svg:path stroke="#306CFE" d="M35.167 15.625C32.729 10.521 29.937 6.25 25 6.25s-7.73 4.27-10.167 9.375C12.396 20.729 10.417 25 10.417 31.25c0 6.896 6.541 12.5 14.583 12.5s14.583-5.604 14.583-12.5c0-6.25-2.083-10.667-4.416-15.625"></svg:path></svg:g>`,
})
export class MarketeqAvocado2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqAxeIcon],svg[marketeq-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 25a22.9 22.9 0 0 1 12.5 6.25a19.7 19.7 0 0 0 4.167-12.5a19.7 19.7 0 0 0-4.167-12.5a22.9 22.9 0 0 1-12.5 6.25z"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75h-4.167a2.083 2.083 0 0 1-2.083-2.083v-31.25a4.167 4.167 0 1 1 8.333 0v31.25a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqAxeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBabyCrib2Icon],svg[marketeq-baby-crib-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 25V12.5m0 20.833h2.084zm18.75 0h2.084zM25 12.5V25zm10.417 0V25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5V8.333m0 33.334h37.5V25H6.25zm0 0H25V25H6.25zM43.75 25V12.5H6.25V25zm0-12.5V8.333z"></svg:path></svg:g>`,
})
export class MarketeqBabyCrib2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBackpackIcon],svg[marketeq-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 20.833h12.5zm12.5 12.5a2.083 2.083 0 0 0-2.083-2.083h-8.334a2.083 2.083 0 0 0-2.083 2.083V43.75h12.5zm-2.083-25a2.083 2.083 0 0 0-2.084-2.083h-4.166a2.083 2.083 0 0 0-2.084 2.083v2.084h8.334zm10.416 31.25h2.084A2.083 2.083 0 0 0 43.75 37.5v-6.25h-4.167zM10.417 31.25H6.25v6.25a2.083 2.083 0 0 0 2.083 2.083h2.084z"></svg:path><svg:path stroke="#306CFE" d="M18.75 10.417h12.5a8.333 8.333 0 0 1 8.333 8.333v22.917A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V18.75a8.333 8.333 0 0 1 8.333-8.333"></svg:path></svg:g>`,
})
export class MarketeqBackpackIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBackward2Icon],svg[marketeq-backward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 6.25v37.5"></svg:path><svg:path stroke="#306CFE" d="m18.75 25l20.833 14.583V10.417z"></svg:path></svg:g>`,
})
export class MarketeqBackward2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBadgeIcon],svg[marketeq-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.708 27.917l-2.875.395l2.084 1.855l-.5 2.645L25 31.563l2.583 1.25l-.5-2.645l2.084-1.855l-2.875-.395L25 25.52z"></svg:path><svg:path stroke="#306CFE" d="M25 41.667a12.5 12.5 0 1 1 0-24.999a12.5 12.5 0 0 1 0 24.999m0-25a12.5 12.5 0 0 1 6.25 1.687V6.25h-12.5v12.104A12.5 12.5 0 0 1 25 16.667"></svg:path></svg:g>`,
})
export class MarketeqBadgeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBagIcon],svg[marketeq-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.333 43.75H12.667a2.084 2.084 0 0 1-2.084-2.25l1.771-22.917a2.084 2.084 0 0 1 2.084-1.916h21.124a2.083 2.083 0 0 1 2.084 1.916l1.77 22.917a2.084 2.084 0 0 1-2.083 2.25"></svg:path><svg:path stroke="#344054" d="M18.75 22.917V12.5A6.25 6.25 0 0 1 25 6.25v0a6.25 6.25 0 0 1 6.25 6.25v10.417"></svg:path></svg:g>`,
})
export class MarketeqBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBagAltIcon],svg[marketeq-bag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 14.583v4.167a6.25 6.25 0 0 0 12.5 0v-4.167"></svg:path><svg:path stroke="#306CFE" d="M41.417 43.75H8.583A2.082 2.082 0 0 1 6.5 41.438l3.708-33.334a2.083 2.083 0 0 1 2.084-1.854h25.416a2.083 2.083 0 0 1 2.084 1.854L43.5 41.438a2.084 2.084 0 0 1-2.083 2.312"></svg:path></svg:g>`,
})
export class MarketeqBagAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBagAlt1Icon],svg[marketeq-bag-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 35.417v-8.334M25 35.417v-8.334zm-8.333 0v-8.334z"></svg:path><svg:path stroke="#306CFE" d="m31.25 6.25l4.167 12.5m2.395 25H12.189A2.08 2.08 0 0 1 10.104 42L6.25 18.75h37.5L39.875 42a2.08 2.08 0 0 1-2.062 1.75M18.75 6.25l-4.167 12.5z"></svg:path></svg:g>`,
})
export class MarketeqBagAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBananaLeftIcon],svg[marketeq-banana-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.333 12.5V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a2.083 2.083 0 0 1 2.084 2.083V12.5A18.94 18.94 0 0 0 25 29.333c4.167 2.73 10.417 3.271 14.583 3.313a4.167 4.167 0 0 1 4.167 4.166a4.17 4.17 0 0 1-2.417 3.771c-5.604 2.5-19.708 7.167-29.896-3.458C2.083 27.25 8.333 12.5 8.333 12.5"></svg:path>`,
})
export class MarketeqBananaLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBananasLeftIcon],svg[marketeq-bananas-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M28.667 31.083a30.1 30.1 0 0 0 13.125-2.958a3.458 3.458 0 0 0-2.334-6.458c-2.975.691-6.037.93-9.083.708c-7.02-.604-11.48-5.542-13.52-7.792"></svg:path><svg:path stroke="#306CFE" d="M8.333 12.5V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a2.083 2.083 0 0 1 2.084 2.083V12.5A18.94 18.94 0 0 0 25 29.333c4.167 2.73 10.417 3.271 14.583 3.313a4.167 4.167 0 0 1 4.167 4.166a4.17 4.17 0 0 1-2.417 3.771c-5.604 2.5-19.708 7.167-29.896-3.458C2.083 27.25 8.333 12.5 8.333 12.5"></svg:path></svg:g>`,
})
export class MarketeqBananasLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBankIcon],svg[marketeq-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 18.75v25m-12.5-25v25zm25 0v25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m-37.5-25L25 6.25l18.75 12.5z"></svg:path></svg:g>`,
})
export class MarketeqBankIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBarcodeScanIcon],svg[marketeq-barcode-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417v-2.084M8.333 25h33.334zm8.334-10.417v2.084zm8.333 0v2.084zm-8.333 20.834v-2.084zm16.666-20.834v2.084zm0 20.834v-2.084z"></svg:path><svg:path stroke="#306CFE" d="M6.25 16.667V8.333A2.083 2.083 0 0 1 8.333 6.25h8.334M43.75 16.667V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334M6.25 33.333v8.334a2.083 2.083 0 0 0 2.083 2.083h8.334m16.666 0h8.334a2.083 2.083 0 0 0 2.083-2.083v-8.334"></svg:path></svg:g>`,
})
export class MarketeqBarcodeScanIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBarrierIcon],svg[marketeq-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 43.75h8.334M12.5 10.417V6.25zm0 25v8.333zm25-25V6.25zm-25 16.666V18.75zm25 0V18.75zm0 8.334v8.333zm-4.167 8.333h8.334z"></svg:path><svg:path stroke="#306CFE" d="M41.667 18.75H8.333a2.083 2.083 0 0 1-2.083-2.083V12.5a2.083 2.083 0 0 1 2.083-2.083h33.334A2.083 2.083 0 0 1 43.75 12.5v4.167a2.083 2.083 0 0 1-2.083 2.083m0 16.667H8.333a2.083 2.083 0 0 1-2.083-2.084v-4.166a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084v4.166a2.083 2.083 0 0 1-2.083 2.084"></svg:path></svg:g>`,
})
export class MarketeqBarrierIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBasketballHoopIcon],svg[marketeq-basketball-hoop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m10.417 16.667l2.083 25M12.5 25h25zm25 8.333h-25zm2.083-16.666l-2.083 25zm-9.729 0l-.687 25zm-9.708 0l.687 25z"></svg:path><svg:path stroke="#344054" d="M39.583 8.333H10.417a4.167 4.167 0 1 0 0 8.334h29.166a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqBasketballHoopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBathroom2Icon],svg[marketeq-bathroom-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.333 12.5v-2.083a4.167 4.167 0 0 0-4.166-4.167H18.75a4.167 4.167 0 0 0-4.167 4.167V43.75"></svg:path><svg:path stroke="#306CFE" d="M39.583 20.833h-12.5V18.75a6.25 6.25 0 0 1 6.25-6.25v0a6.25 6.25 0 0 1 6.25 6.25z"></svg:path><svg:path stroke="#344054" d="M29.167 33.333v-4.166M10.417 43.75h8.333zM37.5 33.333v-4.166z"></svg:path></svg:g>`,
})
export class MarketeqBathroom2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBathtub3Icon],svg[marketeq-bathtub-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 14.583a4.167 4.167 0 0 0-4.167-4.166v0a4.167 4.167 0 0 0-4.166 4.166v8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 22.917h37.5zm35.417 8.333v-8.333H8.333v8.333a8.333 8.333 0 0 0 8.334 8.333h16.666a8.333 8.333 0 0 0 8.334-8.333"></svg:path></svg:g>`,
})
export class MarketeqBathtub3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBathtub8Icon],svg[marketeq-bathtub-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 20.833V12.5a4.167 4.167 0 0 0-8.333 0m5.208 25l1.042 4.167M13.542 37.5L12.5 41.667z"></svg:path><svg:path stroke="#306CFE" d="M43.75 20.833H6.25zM16.667 37.5h16.666a8.333 8.333 0 0 0 8.334-8.333v-8.334H8.333v8.334a8.334 8.334 0 0 0 8.334 8.333"></svg:path></svg:g>`,
})
export class MarketeqBathtub8Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBatteryIcon],svg[marketeq-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.167 10.417h-8.334V6.25h8.334zm6.25 31.25V12.5a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v29.167a2.083 2.083 0 0 0 2.084 2.083h16.666a2.083 2.083 0 0 0 2.084-2.083"></svg:path>`,
})
export class MarketeqBatteryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBattery100Icon],svg[marketeq-battery-100-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 18.75h-4.166v16.667h4.166z"></svg:path><svg:path stroke="#306CFE" d="M35.417 41.667V12.5a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v29.167a2.083 2.083 0 0 0 2.084 2.083h16.666a2.083 2.083 0 0 0 2.084-2.083m-6.25-31.25h-8.334V6.25h8.334z"></svg:path></svg:g>`,
})
export class MarketeqBattery100Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBattery100LineIcon],svg[marketeq-battery-100-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 18.75h-4.166m4.166 16.667h-4.166zm0-8.334h-4.166z"></svg:path><svg:path stroke="#306CFE" d="M35.417 41.667V12.5a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v29.167a2.083 2.083 0 0 0 2.084 2.083h16.666a2.083 2.083 0 0 0 2.084-2.083M29.167 6.25h-8.334v4.167h8.334z"></svg:path></svg:g>`,
})
export class MarketeqBattery100LineIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBatteryChargeIcon],svg[marketeq-battery-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m25 31.25l2.083-4.167h-4.166L25 22.917"></svg:path><svg:path stroke="#306CFE" d="M35.417 41.667V12.5a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083v29.167a2.083 2.083 0 0 0 2.084 2.083h16.666a2.083 2.083 0 0 0 2.084-2.083M29.167 6.25h-8.334v4.167h8.334z"></svg:path></svg:g>`,
})
export class MarketeqBatteryChargeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBedIcon],svg[marketeq-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 37.5v-4.167m6.25-18.75A2.083 2.083 0 0 0 12.5 12.5H8.333a2.083 2.083 0 0 0-2.083 2.083V25h8.333zM41.667 37.5v-4.167z"></svg:path><svg:path stroke="#306CFE" d="M6.25 25h35.417a2.083 2.083 0 0 1 2.083 2.083v6.25H6.25z"></svg:path></svg:g>`,
})
export class MarketeqBedIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBedroom4Icon],svg[marketeq-bedroom-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 22.917h12.5v12.5H6.25v-12.5m37.5 16.666V10.417M6.25 39.583v-6.25z"></svg:path><svg:path stroke="#344054" d="M31.25 27.083h-25v-6.25a2.083 2.083 0 0 1 2.083-2.083h20.834a2.083 2.083 0 0 1 2.083 2.083z"></svg:path></svg:g>`,
})
export class MarketeqBedroom4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBedroom6Icon],svg[marketeq-bedroom-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 35.417v4.166m-29.166-4.166v4.166zm0-20.834v-4.166m20.833 4.166a4.167 4.167 0 0 0-4.167-4.166h-4.166a4.167 4.167 0 0 0-4.167 4.166h-8.333v12.5h29.166v-12.5zm8.333 0v-4.166z"></svg:path><svg:path stroke="#306CFE" d="M10.417 27.083h29.166a4.167 4.167 0 0 1 4.167 4.167v4.167H6.25V31.25a4.167 4.167 0 0 1 4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqBedroom6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBenchPressIcon],svg[marketeq-bench-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 33.333v8.334M16.667 25v16.667zM6.25 33.333h37.5zm2.083 0v8.334z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M16.667 25a8.333 8.333 0 1 0 0-16.667a8.333 8.333 0 0 0 0 16.667"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M16.563 16.667h.208"></svg:path></svg:g>`,
})
export class MarketeqBenchPressIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBike2Icon],svg[marketeq-bike-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 33.333a6.25 6.25 0 1 1-12.5 0a6.25 6.25 0 0 1 12.5 0m-31.25-6.25a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path><svg:path stroke="#306CFE" d="M29.167 10.417h2.416a2.08 2.08 0 0 1 2.084 1.708L37.5 33.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 33.333h6.25l15.73-16.666"></svg:path><svg:path stroke="#306CFE" d="M16.667 16.667h3.291a2.084 2.084 0 0 1 2.084 1.666l1.812 9.105"></svg:path></svg:g>`,
})
export class MarketeqBike2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBikecycleIcon],svg[marketeq-bikecycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 16.667H31.77a22.02 22.02 0 0 0-21.354 16.666v0"></svg:path><svg:path stroke="#344054" d="M6.25 37.5a4.167 4.167 0 1 0 8.333 0a4.167 4.167 0 0 0-8.333 0m20.833-4.167a8.333 8.333 0 1 0 16.667 0a8.333 8.333 0 0 0-16.667 0"></svg:path><svg:path stroke="#306CFE" d="M18.75 20.833v-4.166a2.083 2.083 0 0 0-2.083-2.084h-2.084m20.834 18.75V10.417a2.083 2.083 0 0 0-2.084-2.084h-4.166"></svg:path></svg:g>`,
})
export class MarketeqBikecycleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBillDollarIcon],svg[marketeq-bill-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 27.083h5.209a3.126 3.126 0 0 0 0-6.25h-2.084a3.125 3.125 0 0 1 0-6.25h5.209M25 22.917h-8.333M37.5 14.583V12.5zm0 14.584v-2.084zM25 31.25h-8.333z"></svg:path><svg:path stroke="#306CFE" d="M29.167 6.25h-18.75a2.083 2.083 0 0 0-2.084 2.083V43.75l4.875-2.083l4.855 2.083l4.854-2.083l4.854 2.083l4.854-2.083L37.5 43.75V37.5"></svg:path></svg:g>`,
})
export class MarketeqBillDollarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBilliardBallIcon],svg[marketeq-billiard-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 22.917a6.25 6.25 0 1 0 0 12.499a6.25 6.25 0 0 0 0-12.5m0-8.334a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqBilliardBallIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBirthdayCakeIcon],svg[marketeq-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 18.75v8.333M25 6.25s-4.167 4.875-4.167 8.333a4.167 4.167 0 1 0 8.334 0C29.167 11.125 25 6.25 25 6.25"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m-2.083 0H8.333V29.167a2.084 2.084 0 0 1 2.084-2.084h29.166a2.083 2.083 0 0 1 2.084 2.084z"></svg:path></svg:g>`,
})
export class MarketeqBirthdayCakeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBlackBoardIcon],svg[marketeq-black-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417v6.25m12.5 2.083l-1.396-8.333l-.354-2.084zM31.583 8.333L31.25 6.25zm-17.333 25l-.354 2.084L12.5 43.75zm4.5-27.083l-.354 2.083z"></svg:path><svg:path stroke="#306CFE" d="M41.667 8.333H8.333c-1.15 0-2.083.933-2.083 2.084V31.25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083V10.417c0-1.15-.933-2.084-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqBlackBoardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBlueprintArchitectureIcon],svg[marketeq-blueprint-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 18.75h-4.584l-4.166 4.167h-5.834V18.75h-12.5v16.667h-4.166a4.167 4.167 0 1 0 0 8.333h31.25a2.083 2.083 0 0 0 2.083-2.083V20.833a2.083 2.083 0 0 0-2.083-2.083M14.583 12.5v22.917h-4.166a4.167 4.167 0 0 0-4.167 4.166V16.667a4.167 4.167 0 0 1 4.167-4.167z"></svg:path><svg:path stroke="#344054" d="m43.146 9.77l-2.917-2.916a2.083 2.083 0 0 0-2.916 0l-10.23 10.23v5.833h5.834l10.229-10.23a2.083 2.083 0 0 0 0-2.916"></svg:path></svg:g>`,
})
export class MarketeqBlueprintArchitectureIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBluntedConeIcon],svg[marketeq-blunted-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 43.75c9.205 0 16.667-2.798 16.667-6.25S34.205 31.25 25 31.25S8.333 34.048 8.333 37.5S15.795 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M41.667 36.98L35.417 10C34.896 7.917 30.458 6.25 25 6.25S15.167 7.896 14.583 10l-6.25 27.083a2 2 0 0 0 0 .417c0 3.458 7.459 6.25 16.667 6.25s16.667-2.792 16.667-6.25q.03-.26 0-.52"></svg:path><svg:path stroke="#344054" d="M25 14.583c5.753 0 10.417-1.865 10.417-4.166S30.753 6.25 25 6.25s-10.417 1.865-10.417 4.167c0 2.3 4.664 4.166 10.417 4.166"></svg:path></svg:g>`,
})
export class MarketeqBluntedConeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBoat2Icon],svg[marketeq-boat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.854 16.667c2.38-.015 4.702-.74 6.667-2.084v0a2.084 2.084 0 0 1 3.229 1.792v2.5a8.333 8.333 0 0 1-8.208 8.208H14.458a8.333 8.333 0 0 1-8.208-8.208v-2.5a2.083 2.083 0 0 1 3.23-1.792v0a11.94 11.94 0 0 0 6.666 2.084z"></svg:path><svg:path stroke="#344054" d="M33.792 10.417L16.667 34.979zM15.917 39.583l1.187-1.708a2.084 2.084 0 0 0-.437-2.896a2.085 2.085 0 0 0-2.917.5l-1.25 1.709z"></svg:path></svg:g>`,
})
export class MarketeqBoat2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBoxIcon],svg[marketeq-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 6.25H16.667V25L25 22.917L33.333 25z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqBoxIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBracket2Icon],svg[marketeq-bracket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 6.25h4.167A2.083 2.083 0 0 1 37.5 8.333v12.5A4.167 4.167 0 0 0 41.667 25a4.167 4.167 0 0 0-4.167 4.167v12.5a2.083 2.083 0 0 1-2.083 2.083H31.25"></svg:path><svg:path stroke="#306CFE" d="M18.75 6.25h-4.167A2.083 2.083 0 0 0 12.5 8.333v12.5A4.167 4.167 0 0 1 8.333 25a4.167 4.167 0 0 1 4.167 4.167v12.5a2.083 2.083 0 0 0 2.083 2.083h4.167"></svg:path></svg:g>`,
})
export class MarketeqBracket2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBracketSquare2Icon],svg[marketeq-bracket-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 35.417h2.083a2.083 2.083 0 0 0 2.083-2.084v-6.25A2.083 2.083 0 0 1 35.417 25a2.083 2.083 0 0 1-2.084-2.083v-6.25a2.084 2.084 0 0 0-2.083-2.084h-2.083m-8.334 0H18.75a2.083 2.083 0 0 0-2.083 2.084v6.25A2.083 2.083 0 0 1 14.583 25a2.083 2.083 0 0 1 2.084 2.083v6.25a2.083 2.083 0 0 0 2.083 2.084h2.083"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqBracketSquare2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBreadIcon],svg[marketeq-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 14.583C43.75 9.98 35.417 6.25 25 6.25S6.25 9.98 6.25 14.583c0 2.084 1.563 3.792 4.167 5.23v21.854A2.083 2.083 0 0 0 12.5 43.75h25a2.083 2.083 0 0 0 2.083-2.083V19.813c2.605-1.438 4.167-3.146 4.167-5.23"></svg:path>`,
})
export class MarketeqBreadIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBreakfast2Icon],svg[marketeq-breakfast-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 21.75c-4.792-1.062-6.25-7.167-10.896-4.312c-5.084 3.395-1.604 7.562.125 10.291s3.646 7.73 9.25 4.584c3.666-2.084 5.666-1.209 6.562-4.73c.896-3.52-2.395-5.229-5.041-5.833"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqBreakfast2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBrickwall2Icon],svg[marketeq-brickwall-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 29.167h16.666v-8.334H22.917zm-6.25 0H6.25V37.5h10.417zm0-16.667H6.25v8.333h10.417z"></svg:path><svg:path stroke="#306CFE" d="M16.667 29.167h16.666V37.5H16.667zm-10.417 0h16.667v-8.334H6.25zm10.417-8.334h16.666V12.5H16.667zm27.083 8.334H33.333V37.5H43.75z"></svg:path></svg:g>`,
})
export class MarketeqBrickwall2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBrightnessIcon],svg[marketeq-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m11.75 11.75l1.458 1.458M25 6.25v2.083zm13.25 5.5l-1.458 1.458zM43.75 25h-2.083zm-5.5 13.25l-1.458-1.458zM25 43.75v-2.083zm-13.25-5.5l1.458-1.458zM6.25 25h2.083z"></svg:path><svg:path stroke="#306CFE" d="M25 33.333a8.333 8.333 0 1 0 0-16.666a8.333 8.333 0 0 0 0 16.666"></svg:path></svg:g>`,
})
export class MarketeqBrightnessIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBrowseIcon],svg[marketeq-browse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 25H6.25zm-10.417 0c0-10.417-3.729-18.75-8.333-18.75S16.667 14.583 16.667 25S20.396 43.75 25 43.75s8.333-8.333 8.333-18.75"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqBrowseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBugIcon],svg[marketeq-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 37.5A10.42 10.42 0 0 1 39 43.75M16.667 37.5A10.42 10.42 0 0 0 11 43.75m24.875-37.5a5.88 5.88 0 0 1-3.792 4.27l-1.854.647m-10.459 0l-1.853-.646a5.87 5.87 0 0 1-3.792-4.271m29.625 8.542l-1.104 1.875a11.3 11.3 0 0 1-7.23 5.146v0m.001 6.312a10.54 10.54 0 0 1 7.604 4.813l.729 1.145m-29.167-12.27a11.3 11.3 0 0 1-7.229-5.146L6.25 14.792m0 19.291l.73-1.145a10.54 10.54 0 0 1 7.603-4.813v0"></svg:path><svg:path stroke="#306CFE" d="M35.417 31.25V20.833a2.083 2.083 0 0 0-2.084-2.083H16.667a2.083 2.083 0 0 0-2.084 2.083V31.25A10.417 10.417 0 0 0 25 41.667v0A10.417 10.417 0 0 0 35.417 31.25m-4.167-12.5h-12.5v-4.167A6.25 6.25 0 0 1 25 8.333v0a6.25 6.25 0 0 1 6.25 6.25z"></svg:path></svg:g>`,
})
export class MarketeqBugIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqBusIcon],svg[marketeq-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M10.23 35.417H8.332a2.083 2.083 0 0 1-2.083-2.084V12.5a2.084 2.084 0 0 1 2.083-2.083h29.75a2.08 2.08 0 0 1 1.98 1.416l3.687 10.771l.104.646v10.083a2.083 2.083 0 0 1-2.083 2.084h-1.896"></svg:path><svg:path stroke="#306CFE" d="M6.25 22.917h37.5zm25 12.5H18.917zm-12.5-12.5h12.5v-12.5h-12.5z"></svg:path><svg:path stroke="#344054" d="M14.583 31.25a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334m20.834 0a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqBusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCabinetIcon],svg[marketeq-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 39.583v4.167M22.917 14.583h4.166zm0 16.667h4.166zM12.5 39.583v4.167z"></svg:path><svg:path stroke="#306CFE" d="M10.417 22.917h29.166V8.333A2.083 2.083 0 0 0 37.5 6.25h-25a2.083 2.083 0 0 0-2.083 2.083zM12.5 39.583h25a2.083 2.083 0 0 0 2.083-2.083V22.917H10.417V37.5a2.083 2.083 0 0 0 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqCabinetIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCabinet4Icon],svg[marketeq-cabinet-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 25v-4.167m-6.25 18.75v4.167zm29.166 0v4.167zm-6.25-18.75V25z"></svg:path><svg:path stroke="#306CFE" d="M10.417 39.583h29.166a2.083 2.083 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083H10.417a2.083 2.083 0 0 0-2.084 2.083V37.5a2.083 2.083 0 0 0 2.084 2.083m0 0H25V6.25H10.417a2.083 2.083 0 0 0-2.084 2.083V37.5a2.083 2.083 0 0 0 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqCabinet4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCabinet5Icon],svg[marketeq-cabinet-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 16.667v-2.084h8.334v2.084m-8.334 18.75v-2.084h8.334v2.084"></svg:path><svg:path stroke="#306CFE" d="M8.333 25h33.334m0-16.667v33.334a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083h29.166a2.083 2.083 0 0 1 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqCabinet5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCableway2Icon],svg[marketeq-cableway-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 43.75V25a2.083 2.083 0 0 1 2.083-2.083h8.334A2.083 2.083 0 0 1 31.25 25v18.75"></svg:path><svg:path stroke="#306CFE" d="M25 6.25v8.333M41.667 29.73l-3.563 12.5a2.084 2.084 0 0 1-2.083 1.521H13.979a2.08 2.08 0 0 1-2.083-1.52l-3.563-12.5a2.1 2.1 0 0 1 0-1.126l3.563-12.5a2.08 2.08 0 0 1 2.083-1.52h22.042a2.08 2.08 0 0 1 2.083 1.52l3.563 12.5c.103.368.103.757 0 1.125M14.583 6.25h20.834z"></svg:path></svg:g>`,
})
export class MarketeqCableway2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCallIcon],svg[marketeq-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583A10.417 10.417 0 0 1 35.417 25m-12.5-18.625A17 17 0 0 1 25 6.25A18.75 18.75 0 0 1 43.75 25q0 1.045-.125 2.083"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75a27.5 27.5 0 0 1-9.042-3.98L26 34.334a4.167 4.167 0 0 1 5.583-1.062c.688.437 1.396.833 2.084 1.229a4.167 4.167 0 0 1 1.75 5.875l-1.292 1.98a2.44 2.44 0 0 1-2.875 1.395M7.646 15.98l2.083-1.293a4.167 4.167 0 0 1 5.938 1.521c.396.75.791 1.459 1.229 2.084a4.167 4.167 0 0 1-1.063 5.583l-5.541 3.854A27.5 27.5 0 0 1 6.25 18.75a2.44 2.44 0 0 1 1.396-2.77"></svg:path><svg:path stroke="#306CFE" d="M10.292 27.73a37 37 0 0 0 5.375 6.603a37 37 0 0 0 6.604 5.375"></svg:path></svg:g>`,
})
export class MarketeqCallIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCallIn2Icon],svg[marketeq-call-in-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25c9.646.563 15.438 8.333 15.438 18.75"></svg:path><svg:path stroke="#344054" d="M35.146 21.417L40.437 25l3.313-5.708"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75a27.5 27.5 0 0 1-9.042-3.98L26 34.334a4.167 4.167 0 0 1 5.583-1.062c.688.437 1.396.833 2.084 1.229a4.167 4.167 0 0 1 1.75 5.875l-1.292 1.98a2.44 2.44 0 0 1-2.875 1.395M7.646 15.98l2.083-1.293a4.167 4.167 0 0 1 5.938 1.521c.396.75.791 1.459 1.229 2.084a4.167 4.167 0 0 1-1.063 5.583l-5.541 3.854A27.5 27.5 0 0 1 6.25 18.75a2.44 2.44 0 0 1 1.396-2.77"></svg:path><svg:path stroke="#306CFE" d="M10.292 27.73a37 37 0 0 0 5.375 6.603a37 37 0 0 0 6.604 5.375"></svg:path></svg:g>`,
})
export class MarketeqCallIn2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCampingIcon],svg[marketeq-camping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.27 33.854l-6.603 9.896h16.666l-6.604-9.896a2.083 2.083 0 0 0-3.458 0"></svg:path><svg:path stroke="#306CFE" d="m20.833 6.25l20.98 34.333a2.085 2.085 0 0 1-1.771 3.167H9.958a2.083 2.083 0 0 1-1.77-3.167L29.167 6.25"></svg:path></svg:g>`,
})
export class MarketeqCampingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCampingChairIcon],svg[marketeq-camping-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 27.667V8.333a2.083 2.083 0 0 1 2.083-2.083h20.834A2.083 2.083 0 0 1 37.5 8.333v19.334m-25 0L35.417 43.75m2-16.02L14.583 43.75"></svg:path><svg:path stroke="#344054" d="M8.333 27.083a106.5 106.5 0 0 0 33.334 0"></svg:path></svg:g>`,
})
export class MarketeqCampingChairIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCampingGasIcon],svg[marketeq-camping-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 31.25v-4.167m-8.334 0v4.167"></svg:path><svg:path stroke="#306CFE" d="M14.583 31.25h20.834a2.083 2.083 0 0 1 2.083 2.083V43.75h-25V33.333a2.083 2.083 0 0 1 2.083-2.083m6.25-16.667A3.895 3.895 0 0 0 25 18.75a3.957 3.957 0 0 0 4.167-4.167c0-2.791-2.084-3.125-2.084-8.333c-4.166 2.083-6.25 5.396-6.25 8.333"></svg:path><svg:path stroke="#344054" d="M8.333 43.75h33.334"></svg:path></svg:g>`,
})
export class MarketeqCampingGasIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCannedFoodIcon],svg[marketeq-canned-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 35.417h12.5m5.146-8.334a13.542 13.542 0 1 0-22.792 0z"></svg:path><svg:path stroke="#306CFE" d="M39.583 27.083H10.417c-1.15 0-2.084.933-2.084 2.084v12.5c0 1.15.933 2.083 2.084 2.083h29.166a2.084 2.084 0 0 0 2.084-2.083v-12.5a2.084 2.084 0 0 0-2.084-2.084"></svg:path></svg:g>`,
})
export class MarketeqCannedFoodIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCannedFood2Icon],svg[marketeq-canned-food-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M36.396 27.083a13.542 13.542 0 1 0-22.792 0z"></svg:path><svg:path stroke="#306CFE" d="M39.583 27.083H10.417a2.084 2.084 0 0 0-2.084 2.084v12.5c0 1.15.933 2.083 2.084 2.083h29.166c1.15 0 2.084-.933 2.084-2.083v-12.5a2.084 2.084 0 0 0-2.084-2.084"></svg:path></svg:g>`,
})
export class MarketeqCannedFood2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCarAllertIcon],svg[marketeq-car-allert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M29.063 23.958h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M39.583 37.5h2.084a2.083 2.083 0 0 0 2.083-2.083v-6.709a2.08 2.08 0 0 0-1.583-2.083l-2.584-.583m-18.75-9.375h-4.958A2.08 2.08 0 0 0 14 17.812L10.417 25l-3.021 1.5a2.08 2.08 0 0 0-1.146 1.875v7.042A2.083 2.083 0 0 0 8.333 37.5h2.084m8.333 0h12.5"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M29.167 8.333v6.25M18.75 37.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0m20.833 0a4.166 4.166 0 1 0-8.332 0a4.166 4.166 0 0 0 8.332 0"></svg:path></svg:g>`,
})
export class MarketeqCarAllertIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCarLifterIcon],svg[marketeq-car-lifter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 43.75l20.834-14.583l-20.834-14.584"></svg:path><svg:path stroke="#344054" d="M35.417 14.583L14.583 29.167L35.417 43.75"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m-2.083-29.167H8.333A2.083 2.083 0 0 1 6.25 12.5V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083V12.5a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqCarLifterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCarShippingIcon],svg[marketeq-car-shipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 12.5v22.917H20.833a4.167 4.167 0 0 0-8.333 0H8.333a2.083 2.083 0 0 1-2.083-2.084V12.5a2.083 2.083 0 0 1 2.083-2.083h20.834A2.083 2.083 0 0 1 31.25 12.5m12.146 9.896l-3.188-4.792a2.08 2.08 0 0 0-1.75-.937H31.25v18.75h2.083a4.167 4.167 0 0 1 8.334 0h2.083V23.542a2.1 2.1 0 0 0-.354-1.146"></svg:path><svg:path stroke="#344054" d="M20.833 35.417a4.166 4.166 0 1 1-8.331 0a4.166 4.166 0 0 1 8.331 0M37.5 31.25a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqCarShippingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCaravanIcon],svg[marketeq-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M38.542 33.333h6.25M36.27 18.208a8.33 8.33 0 0 0-7.896-5.708H7.292a2.083 2.083 0 0 0-2.084 2.083V31.25a2.083 2.083 0 0 0 2.084 2.083h4.166a4.167 4.167 0 0 1 8.334 0h18.75V25z"></svg:path><svg:path stroke="#344054" d="M28.125 20.833h-4.167m-4.166 12.5a4.167 4.167 0 1 1-8.335 0a4.167 4.167 0 0 1 8.335 0"></svg:path></svg:g>`,
})
export class MarketeqCaravanIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCargoShip2Icon],svg[marketeq-cargo-ship-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 31.25h-4.166M12.5 10.417v4.166z"></svg:path><svg:path stroke="#306CFE" d="M6.25 22.917h35.417a2.083 2.083 0 0 1 1.958 2.812l-4.687 12.5a2.08 2.08 0 0 1-1.959 1.354h-25A2.08 2.08 0 0 1 9.896 38zm16.667 0l-1.688-6.75a2.08 2.08 0 0 0-2.083-1.584H8.333a2.083 2.083 0 0 0-2.083 2.084v6.25z"></svg:path></svg:g>`,
})
export class MarketeqCargoShip2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCarpet3Icon],svg[marketeq-carpet-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 33.333H31.25v-12.5H14.583z"></svg:path><svg:path stroke="#306CFE" d="M10.417 41.667H37.5a2.083 2.083 0 0 0 2.083-2.084v-25A2.083 2.083 0 0 0 37.5 12.5H14.583"></svg:path><svg:path stroke="#306CFE" d="M43.75 35.417h-4.167m-25-22.917v25a4.167 4.167 0 1 1-8.333 0v-25a4.167 4.167 0 1 1 8.333 0m-4.166 20.833a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333M43.75 18.75h-4.167zm0 8.333h-4.167z"></svg:path></svg:g>`,
})
export class MarketeqCarpet3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCartIcon],svg[marketeq-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.458a2.08 2.08 0 0 1 2.084 1.77l1 6.563l2.875 18.75l22.916-2.083l4.167-16.667H13.792"></svg:path></svg:g>`,
})
export class MarketeqCartIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCartAddIcon],svg[marketeq-cart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M35.417 16.667h-12.5m6.25-6.25v12.5z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.583a2.084 2.084 0 0 1 2.084 1.625l5.458 23.833a2.08 2.08 0 0 0 2.083 1.625H38a2.084 2.084 0 0 0 2.083-1.583l3.667-15.083"></svg:path></svg:g>`,
})
export class MarketeqCartAddIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCartAlt1Icon],svg[marketeq-cart-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.833a2.08 2.08 0 0 1 1.938 1.313l7.812 19.52l-2.666 5.313a2.084 2.084 0 0 0 1.875 3.02h19.541"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M15 12.5h28.75l-5.833 14.583H20.833"></svg:path></svg:g>`,
})
export class MarketeqCartAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCartRemoveIcon],svg[marketeq-cart-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.417 42.708h.208m-12.708 0h.208z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M35.417 16.667h-12.5"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25h4.583a2.084 2.084 0 0 1 2.084 1.625l5.458 23.833a2.08 2.08 0 0 0 2.083 1.625H38a2.084 2.084 0 0 0 2.083-1.583l3.667-15.083"></svg:path></svg:g>`,
})
export class MarketeqCartRemoveIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCashierMachineLeftIcon],svg[marketeq-cashier-machine-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 22.917v-8.334m8.333-6.25V12.5A2.083 2.083 0 0 1 25 14.583H12.5a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25H25a2.083 2.083 0 0 1 2.083 2.083"></svg:path><svg:path stroke="#306CFE" d="M6.25 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25l-3.687-11.084a2.08 2.08 0 0 0-1.98-1.416H11.917a2.08 2.08 0 0 0-2.084 1.416zm0 0v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25z"></svg:path></svg:g>`,
})
export class MarketeqCashierMachineLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCassetteIcon],svg[marketeq-cassette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 18.75H14.583m18.75 12.5H16.667l-2.084 8.333h20.834z"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqCassetteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCautionIcon],svg[marketeq-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M27.5 27.083h-5a2.083 2.083 0 0 1-2.083-1.875L18.75 8.542a2.084 2.084 0 0 1 2.083-2.292h8.334a2.083 2.083 0 0 1 2.083 2.292l-1.667 16.666a2.083 2.083 0 0 1-2.083 1.875"></svg:path><svg:path stroke="#344054" d="M25 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqCautionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCautionSignCircleIcon],svg[marketeq-caution-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 34.375h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 25c0-10.355-8.395-18.75-18.75-18.75S6.25 14.645 6.25 25S14.645 43.75 25 43.75S43.75 35.355 43.75 25"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 25V14.583"></svg:path></svg:g>`,
})
export class MarketeqCautionSignCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCautionSignSquareIcon],svg[marketeq-caution-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 34.375h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 25V14.583"></svg:path></svg:g>`,
})
export class MarketeqCautionSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCdIcon],svg[marketeq-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 29.167a4.167 4.167 0 1 0 0-8.334a4.167 4.167 0 0 0 0 8.334"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqCdIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChair2Icon],svg[marketeq-chair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 35.417v8.333m-20.834-8.333v8.333z"></svg:path><svg:path stroke="#306CFE" d="M35.417 27.083H14.583V8.333a2.083 2.083 0 0 1 2.084-2.083h16.666a2.083 2.083 0 0 1 2.084 2.083zm2.083 8.334h-25v-6.25a2.083 2.083 0 0 1 2.083-2.084h20.834a2.083 2.083 0 0 1 2.083 2.084z"></svg:path></svg:g>`,
})
export class MarketeqChair2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChair5Icon],svg[marketeq-chair-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 6.25v20.833m0 8.334v8.333zm20.834 0v8.333zm0-8.334V6.25z"></svg:path><svg:path stroke="#306CFE" d="M35.417 18.75H14.583v-8.333h20.834zM37.5 35.417h-25v-6.25a2.083 2.083 0 0 1 2.083-2.084h20.834a2.083 2.083 0 0 1 2.083 2.084z"></svg:path></svg:g>`,
})
export class MarketeqChair5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChaiseLongueIcon],svg[marketeq-chaise-longue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 27.083a8.333 8.333 0 0 0-8.333-8.333H25v-1.042a7.292 7.292 0 0 0-14.583 0v.563m29.166 21.312v-4.166m-29.166 4.166v-4.166z"></svg:path><svg:path stroke="#306CFE" d="M14.583 27.083v-3.937a4.31 4.31 0 0 0-3.458-4.396a4.168 4.168 0 0 0-4.875 4.167v12.5h37.5v-6.25a2.083 2.083 0 0 0-2.083-2.084z"></svg:path></svg:g>`,
})
export class MarketeqChaiseLongueIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChartColumIcon],svg[marketeq-chart-colum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M28.125 6.25h-6.25v37.5h6.25z"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75H6.25V25h6.25zm31.25-29.167H37.5V43.75h6.25z"></svg:path></svg:g>`,
})
export class MarketeqChartColumIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChartColumnGrowIcon],svg[marketeq-chart-column-grow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25c8.333 0 27.083-4.167 35.417-18.75"></svg:path><svg:path stroke="#344054" d="M33.333 6.25h8.334l2.083 8.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75H6.25v-8.333h6.25zm16.667-12.5h-6.25v12.5h6.25zm16.666-8.333h-6.25V43.75h6.25z"></svg:path></svg:g>`,
})
export class MarketeqChartColumnGrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChartColumnLowIcon],svg[marketeq-chart-column-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 6.25c7.208 12.02 22.75 16.104 31.25 16.667"></svg:path><svg:path stroke="#344054" d="m41.667 16.667l2.083 6.25l-6.25 4.166"></svg:path><svg:path stroke="#306CFE" d="M39.583 35.417h6.25v8.333h-6.25zM22.917 43.75h6.25v-12.5h-6.25zm-16.667 0h6.25V22.917H6.25z"></svg:path></svg:g>`,
})
export class MarketeqChartColumnLowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChartLineAlt1Icon],svg[marketeq-chart-line-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M14.583 33.333L25 22.917l8.333 6.25l7.396-14.813"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M41.563 12.5h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.25 6.25v37.5h37.5"></svg:path></svg:g>`,
})
export class MarketeqChartLineAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChartPieIcon],svg[marketeq-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.354 38.792a14.98 14.98 0 1 1-11.52-25.021"></svg:path><svg:path stroke="#306CFE" d="M20.833 29.167V6.25A23.04 23.04 0 0 1 43.75 29.167a22.92 22.92 0 0 1-5.333 14.687z"></svg:path></svg:g>`,
})
export class MarketeqChartPieIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChassisIcon],svg[marketeq-chassis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 12.5v25m-8.333-25h16.666zm0 25h16.666z"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75a4.167 4.167 0 0 1-4.167-4.167v-4.166A4.167 4.167 0 0 1 37.5 6.25v0a4.167 4.167 0 0 1 4.167 4.167v4.166A4.167 4.167 0 0 1 37.5 18.75m-20.833-4.167v-4.166a4.167 4.167 0 1 0-8.334 0v4.166a4.167 4.167 0 1 0 8.334 0m25 25v-4.166a4.167 4.167 0 1 0-8.334 0v4.166a4.167 4.167 0 1 0 8.334 0m-25 0v-4.166a4.167 4.167 0 1 0-8.334 0v4.166a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqChassisIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChat4Icon],svg[marketeq-chat-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 41.667h-6.25a2.083 2.083 0 0 1-2.083-2.084V16.667M22.917 25h12.5m-12.5-8.333h12.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 8.333h-25a2.083 2.083 0 0 0-2.084 2.084V31.25a2.083 2.083 0 0 0 2.084 2.083h6.25v6.25l10.416-6.25h8.334a2.083 2.083 0 0 0 2.083-2.083V10.417a2.083 2.083 0 0 0-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqChat4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChatAlertLeft3Icon],svg[marketeq-chat-alert-left-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 28.125h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 18.75v-4.167"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v27.084A2.083 2.083 0 0 0 8.333 37.5h8.334v6.25l10.416-6.25h14.584a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqChatAlertLeft3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChatAltIcon],svg[marketeq-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 8.333v27.084a2.083 2.083 0 0 1-2.083 2.083H31.25L25 43.75l-6.25-6.25H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083"></svg:path>`,
})
export class MarketeqChatAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChatAlt3Icon],svg[marketeq-chat-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M33.333 22.917h.209m-8.542 0h.208zm-8.542 0h.209z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m39.188 33.813l2.479 9.937l-10.313-5.167a20.5 20.5 0 0 1-6.354 1c-10.417 0-18.75-7.458-18.75-16.666S14.583 6.25 25 6.25s18.75 7.458 18.75 16.667a15.6 15.6 0 0 1-4.562 10.895"></svg:path></svg:g>`,
})
export class MarketeqChatAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChatLeft2Icon],svg[marketeq-chat-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 41.667h-6.25a2.083 2.083 0 0 1-2.083-2.084V16.667"></svg:path><svg:path stroke="#306CFE" d="M41.667 8.333h-25a2.083 2.083 0 0 0-2.084 2.084V31.25a2.083 2.083 0 0 0 2.084 2.083h6.25v6.25l10.416-6.25h8.334a2.083 2.083 0 0 0 2.083-2.083V10.417a2.083 2.083 0 0 0-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqChatLeft2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckCircleIcon],svg[marketeq-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m16.667 25l6.25 6.25l10.416-10.417"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqCheckCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckDoubleIcon],svg[marketeq-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m27.542 34.375l16.208-18.75"></svg:path><svg:path stroke="#306CFE" d="m6.25 24.75l8.333 9.625l16.209-18.75"></svg:path></svg:g>`,
})
export class MarketeqCheckDoubleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckMarkCircleIcon],svg[marketeq-check-mark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m16.667 23.958l6.25 6.25l10.416-10.416"></svg:path><svg:path stroke="#306CFE" d="M43.75 25c0-10.355-8.395-18.75-18.75-18.75S6.25 14.645 6.25 25S14.645 43.75 25 43.75S43.75 35.355 43.75 25"></svg:path></svg:g>`,
})
export class MarketeqCheckMarkCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckMarkSquareIcon],svg[marketeq-check-mark-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 19.792L22.917 30.208l-6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqCheckMarkSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckMarkSquare2Icon],svg[marketeq-check-mark-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 10.417L25 29.167l-8.333-8.334"></svg:path><svg:path stroke="#306CFE" d="M43.75 22.917v18.75a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h25"></svg:path></svg:g>`,
})
export class MarketeqCheckMarkSquare2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChemistryIcon],svg[marketeq-chemistry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083V6.25M6.25 14.583h20.833"></svg:path><svg:path stroke="#344054" d="M25 8.333h12.5m-2.083 20.834V8.333h-8.334v20.834a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqChemistryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChemistry5Icon],svg[marketeq-chemistry-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083V6.25M6.25 14.583h20.833"></svg:path><svg:path stroke="#344054" d="M25 8.333h12.5m3.917 24.021l-6-11.146V8.333h-8.334v12.875l-6 11.146a2.083 2.083 0 0 0 1.834 3.063h16.666a2.082 2.082 0 0 0 1.834-3.063"></svg:path></svg:g>`,
})
export class MarketeqChemistry5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChipIcon],svg[marketeq-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 33.333H8.333M25 12.5V6.25zm8.333 0V8.333zm-16.666 0V8.333zM37.5 25h6.25zm0 8.333h4.167zm0-16.666h4.167zM25 37.5v6.25zm-8.333 0v4.167zm16.666 0v4.167zM12.5 25H6.25zm0-8.333H8.333z"></svg:path><svg:path stroke="#306CFE" d="M35.417 12.5H14.583c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083V14.583c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqChipIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqChronometerWatch3SecondIcon],svg[marketeq-chronometer-watch-3-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 6.25h12.5M25 12.5V6.25zm0 8.333v8.334h4.167"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqChronometerWatch3SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardAdd2Icon],svg[marketeq-clipboard-add-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 27.083V8.333a2.083 2.083 0 0 0-2.083-2.083h-25a2.083 2.083 0 0 0-2.084 2.083v33.334a2.083 2.083 0 0 0 2.084 2.083H25"></svg:path><svg:path stroke="#344054" d="M37.5 35.417v8.333M16.667 6.25h12.5v6.25a2.083 2.083 0 0 1-2.084 2.083H18.75a2.083 2.083 0 0 1-2.083-2.083zm0 29.167H25zm0-8.334h12.5zm16.666 12.5h8.334z"></svg:path></svg:g>`,
})
export class MarketeqClipboardAdd2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardChecklist2Icon],svg[marketeq-clipboard-checklist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 6.25h-25c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.932-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" d="m18.75 29.167l4.167 4.166L31.25 25m-12.5-12.5a2.083 2.083 0 0 0 2.083 2.083h8.334A2.083 2.083 0 0 0 31.25 12.5V6.25h-12.5z"></svg:path></svg:g>`,
})
export class MarketeqClipboardChecklist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardDelete2Icon],svg[marketeq-clipboard-delete-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 31.25V8.333a2.083 2.083 0 0 0-2.083-2.083h-25a2.083 2.083 0 0 0-2.084 2.083v33.334a2.083 2.083 0 0 0 2.084 2.083H25"></svg:path><svg:path stroke="#344054" d="M33.333 39.583h8.334m-25-33.333h12.5v6.25a2.083 2.083 0 0 1-2.084 2.083H18.75a2.083 2.083 0 0 1-2.083-2.083zm0 29.167H25zm0-8.334h12.5z"></svg:path></svg:g>`,
})
export class MarketeqClipboardDelete2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardEdit3Icon],svg[marketeq-clipboard-edit-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 33.333v8.334a2.083 2.083 0 0 1-2.084 2.083h-25a2.083 2.083 0 0 1-2.083-2.083V14.583A2.083 2.083 0 0 1 8.333 12.5h6.25m12.5 0h6.25a2.083 2.083 0 0 1 2.084 2.083v6.25"></svg:path><svg:path stroke="#344054" d="M25 10.417a4.167 4.167 0 1 0-8.333 0v0a2.083 2.083 0 0 0-2.084 2.083v4.167h12.5V12.5A2.083 2.083 0 0 0 25 10.417M43.146 22.27l-2.917-2.917a2.083 2.083 0 0 0-2.916 0l-10.23 10.23v5.833h5.834l10.229-10.23a2.083 2.083 0 0 0 0-2.916"></svg:path></svg:g>`,
})
export class MarketeqClipboardEdit3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardEditLeft2Icon],svg[marketeq-clipboard-edit-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M14.583 33.333v8.334a2.083 2.083 0 0 0 2.084 2.083h25a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083h-25a2.083 2.083 0 0 0-2.084 2.083v12.5"></svg:path><svg:path stroke="#344054" d="M35.417 12.5a2.083 2.083 0 0 1-2.084 2.083H25a2.083 2.083 0 0 1-2.083-2.083V6.25h12.5zM6.854 22.27l2.917-2.916a2.083 2.083 0 0 1 2.916 0l10.23 10.23v5.833h-5.834L6.854 25.187a2.083 2.083 0 0 1 0-2.916"></svg:path></svg:g>`,
})
export class MarketeqClipboardEditLeft2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqClockAltIcon],svg[marketeq-clock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 16.667V25l4.167 4.167m4.166 10.416L37.5 43.75m-25-37.5a6.25 6.25 0 0 0-2.687 11.875a16.67 16.67 0 0 1 8.333-8.333A6.25 6.25 0 0 0 12.5 6.25m25 0a6.25 6.25 0 0 0-5.625 3.563a16.67 16.67 0 0 1 8.333 8.333A6.25 6.25 0 0 0 37.5 6.25M16.667 39.583L12.5 43.75z"></svg:path><svg:path stroke="#306CFE" d="M41.667 25a16.667 16.667 0 0 1-33.334 0a16.5 16.5 0 0 1 1.48-6.875a16.67 16.67 0 0 1 8.333-8.333a16.67 16.67 0 0 1 13.75 0a16.67 16.67 0 0 1 8.333 8.333A16.5 16.5 0 0 1 41.667 25"></svg:path></svg:g>`,
})
export class MarketeqClockAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCloudIcon],svg[marketeq-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 31.48a13.73 13.73 0 1 1 20.833-15.084a9.6 9.6 0 0 1 1.73-.167A8.73 8.73 0 0 1 37.5 33.333"></svg:path><svg:path stroke="#306CFE" d="M33.056 31.611h-.558a.945.945 0 0 1-.887-.633a.94.94 0 0 1 .188-1.076l.388-.388a.945.945 0 0 0 0-1.34l-1.341-1.351a.946.946 0 0 0-1.342 0l-.387.387a.94.94 0 0 1-1.076.189a.945.945 0 0 1-.652-.897v-.558a.945.945 0 0 0-.945-.944h-1.888a.945.945 0 0 0-.945.944v.558a.945.945 0 0 1-.633.887v0a.94.94 0 0 1-1.076-.188l-.388-.388a.945.945 0 0 0-1.34 0l-1.351 1.341a.946.946 0 0 0 0 1.342l.387.387a.94.94 0 0 1 .189 1.076a.945.945 0 0 1-.888.633h-.567a.945.945 0 0 0-.944.945v1.889a.945.945 0 0 0 .944.944h.558a.94.94 0 0 1 .887.633v0a.94.94 0 0 1-.188 1.076l-.388.388a.945.945 0 0 0 0 1.34l1.332 1.332a.945.945 0 0 0 1.341 0l.387-.387a.945.945 0 0 1 1.077-.189a.945.945 0 0 1 .633.888v.605a.945.945 0 0 0 .944.944h1.89a.944.944 0 0 0 .944-.944v-.558a.94.94 0 0 1 .632-.887a.94.94 0 0 1 1.077.188l.387.388a.946.946 0 0 0 1.341 0l1.332-1.332a.945.945 0 0 0 0-1.341l-.387-.387a.95.95 0 0 1-.19-1.077v0a.94.94 0 0 1 .889-.633h.614a.945.945 0 0 0 .944-.944v-1.917a.945.945 0 0 0-.944-.945"></svg:path><svg:path stroke="#344054" d="M25.5 36a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class MarketeqCloudIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCoffeeMachineIcon],svg[marketeq-coffee-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 14.583v4.167m4.167 12.5v-4.167h-8.333v4.167a4.167 4.167 0 1 0 8.333 0"></svg:path><svg:path stroke="#306CFE" d="M41.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083v-6.25h37.5v6.25a2.083 2.083 0 0 1-2.083 2.083m-2.084-37.5H8.333A2.083 2.083 0 0 0 6.25 8.333v27.084h14.583V14.583H37.5a2.083 2.083 0 0 0 2.083-2.083z"></svg:path></svg:g>`,
})
export class MarketeqCoffeeMachineIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCompactDisk2Icon],svg[marketeq-compact-disk-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38.25 11.75a18.2 18.2 0 0 0-7.312-4.52l-5.73 13.603a4.167 4.167 0 0 1 3.959 3.938l13.625-5.73a18.2 18.2 0 0 0-4.542-7.29"></svg:path><svg:path stroke="#344054" d="M25 29.167a4.167 4.167 0 1 0 0-8.334a4.167 4.167 0 0 0 0 8.334"></svg:path><svg:path stroke="#344054" d="m19.063 42.77l5.729-13.603a4.166 4.166 0 0 1-3.959-3.938L7.23 30.938A18.75 18.75 0 0 0 19.063 42.77"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqCompactDisk2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCompactDisk3Icon],svg[marketeq-compact-disk-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M35.417 25A10.417 10.417 0 0 0 25 14.583M14.583 25A10.417 10.417 0 0 0 25 35.417"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqCompactDisk3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCompactDiskDisableIcon],svg[marketeq-compact-disk-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path><svg:path stroke="#344054" d="m8.333 8.333l33.334 33.334M25 20.833a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333"></svg:path></svg:g>`,
})
export class MarketeqCompactDiskDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqConeGeometricIcon],svg[marketeq-cone-geometric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 43.75c8.054 0 14.583-2.798 14.583-6.25S33.054 31.25 25 31.25s-14.583 2.798-14.583 6.25S16.946 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M39.292 36.27L25 6.25L10.708 36.27a2.9 2.9 0 0 0-.291 1.23c0 3.458 6.52 6.25 14.583 6.25s14.583-2.792 14.583-6.25a2.9 2.9 0 0 0-.291-1.23"></svg:path></svg:g>`,
})
export class MarketeqConeGeometricIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqContractRightIcon],svg[marketeq-contract-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 27.083v14.584a2.083 2.083 0 0 1-2.084 2.083h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h25a2.083 2.083 0 0 1 2.084 2.083v6.25"></svg:path><svg:path stroke="#344054" d="M14.583 35.417h6.25M43.146 16.02l-2.917-2.917a2.083 2.083 0 0 0-2.916 0l-10.23 10.23v5.833h5.834l10.229-10.23a2.083 2.083 0 0 0 0-2.916"></svg:path></svg:g>`,
})
export class MarketeqContractRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqContrassIcon],svg[marketeq-contrass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 25A8.333 8.333 0 0 1 25 33.333V16.667A8.334 8.334 0 0 1 33.333 25"></svg:path><svg:path stroke="#306CFE" d="m44.146 23.521l-4.563-4.562V12.5a2.083 2.083 0 0 0-2.083-2.083h-6.458l-4.563-4.563a2.084 2.084 0 0 0-2.958 0l-4.563 4.563H12.5a2.083 2.083 0 0 0-2.083 2.083v6.459L5.854 23.52a2.08 2.08 0 0 0 0 2.958l4.563 4.563V37.5a2.084 2.084 0 0 0 2.083 2.083h6.458l4.563 4.563a2.084 2.084 0 0 0 2.958 0l4.563-4.563H37.5a2.083 2.083 0 0 0 2.083-2.083v-6.458l4.563-4.563a2.084 2.084 0 0 0 0-2.958"></svg:path></svg:g>`,
})
export class MarketeqContrassIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqContrassAltIcon],svg[marketeq-contrass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583v20.834a10.417 10.417 0 1 0 0-20.834"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqContrassAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqContrassAlt3Icon],svg[marketeq-contrass-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583H14.583v20.834H25z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqContrassAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqContrassAlt6Icon],svg[marketeq-contrass-alt-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583H14.583v20.834H25z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqContrassAlt6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqConversationIcon],svg[marketeq-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.188 17.104a13.06 13.06 0 0 1 6.562 11.021a12.13 12.13 0 0 1-2.396 7.292l2.396 8.333l-8.333-3.604a17.7 17.7 0 0 1-7.292 1.52a15.56 15.56 0 0 1-14.812-9.27"></svg:path><svg:path stroke="#306CFE" d="M37.5 19.792c0 7.479-7 13.541-15.625 13.541a17.7 17.7 0 0 1-7.292-1.52l-1.354.583l-6.979 3.02l2.396-8.333a12.13 12.13 0 0 1-2.396-7.291c0-7.48 7-13.542 15.625-13.542c7.563 0 13.875 4.667 15.313 10.854c.21.88.314 1.783.312 2.688"></svg:path></svg:g>`,
})
export class MarketeqConversationIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCouldronIcon],svg[marketeq-couldron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m39.583 39.583l-3.979-7.958m-25.187 7.958l3.979-7.958"></svg:path><svg:path stroke="#306CFE" d="M39.417 10.417H10.583a16.36 16.36 0 0 0-2.25 8.333a16.667 16.667 0 1 0 33.334 0c.01-2.93-.768-5.807-2.25-8.333"></svg:path><svg:path stroke="#344054" d="M6.25 10.417h37.5"></svg:path></svg:g>`,
})
export class MarketeqCouldronIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCouponIcon],svg[marketeq-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 36.458v3.125m0-29.166v3.125zm0 10.416v8.334z"></svg:path><svg:path stroke="#306CFE" d="M43.75 12.5v25a2.083 2.083 0 0 1-2.083 2.083H8.333A2.083 2.083 0 0 1 6.25 37.5v-6.25a6.25 6.25 0 0 0 0-12.5V12.5a2.083 2.083 0 0 1 2.083-2.083h33.334A2.083 2.083 0 0 1 43.75 12.5"></svg:path></svg:g>`,
})
export class MarketeqCouponIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCpuIcon],svg[marketeq-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 33.333h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M29.167 22.917h-8.334m8.334-8.334h-8.334z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 6.25H14.583c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqCpuIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCradleIcon],svg[marketeq-cradle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 6.25h-4.166a12.5 12.5 0 0 0-12.5 12.5h16.666z"></svg:path><svg:path stroke="#306CFE" d="m37.5 42.604l-2.187-11.812M12.5 42.604l2.188-11.791M41.667 18.75H8.333m31.25 4.167V18.75H10.417v4.167a8.333 8.333 0 0 0 8.333 8.333h12.5a8.334 8.334 0 0 0 8.333-8.333"></svg:path><svg:path stroke="#344054" d="M41.667 41.667a67.9 67.9 0 0 1-33.334 0"></svg:path></svg:g>`,
})
export class MarketeqCradleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCreateNoteIcon],svg[marketeq-create-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 8.333a4.354 4.354 0 0 0-6.146.25L21.188 22.917L18.75 31.25l8.333-2.437l14.334-14.23a4.356 4.356 0 0 0 .25-6.25"></svg:path><svg:path stroke="#306CFE" d="M25 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v33.334a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083V25"></svg:path></svg:g>`,
})
export class MarketeqCreateNoteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCreateNoteAltIcon],svg[marketeq-create-note-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 20.833s7.354.855 11.333-3.708c4-4.625 3.25-12.958 3.25-12.958a17 17 0 0 0-5.27.375l-.98 3.791l-3.98-1.479q-.644.487-1.166 1.104c-4 4.542-3.187 12.875-3.187 12.875m0 0L25 25"></svg:path><svg:path stroke="#306CFE" d="M25 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v33.334a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083V25"></svg:path></svg:g>`,
})
export class MarketeqCreateNoteAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCrossArrowIcon],svg[marketeq-cross-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 25h37.5M25 43.75V6.25z"></svg:path><svg:path stroke="#344054" d="M12.5 18.75L6.25 25l6.25 6.25M31.25 12.5L25 6.25l-6.25 6.25M37.5 31.25L43.75 25l-6.25-6.25M18.75 37.5L25 43.75l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqCrossArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCrossCircleIcon],svg[marketeq-cross-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 31.25l-12.5-12.5m0 12.5l12.5-12.5"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqCrossCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCubeIcon],svg[marketeq-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 12.5v25M25 31.25L8.333 37.5L25 43.75l16.667-6.25zM8.333 12.5v25zM25 18.75v25z"></svg:path><svg:path stroke="#344054" d="M41.667 12.5L25 18.75L8.333 12.5L25 6.25z"></svg:path></svg:g>`,
})
export class MarketeqCubeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCursorIcon],svg[marketeq-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40.708 6.458L7.542 21.48a2.437 2.437 0 0 0 .791 4.563l12.98 2.625l2.645 13a2.437 2.437 0 0 0 4.563.812L43.54 9.292a2.084 2.084 0 0 0-2.833-2.834"></svg:path>`,
})
export class MarketeqCursorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCursor2Icon],svg[marketeq-cursor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M24.583 19.542L8.938 35.167a2.084 2.084 0 0 0 0 2.937l2.958 2.959a2.084 2.084 0 0 0 2.937 0l15.625-15.646"></svg:path><svg:path stroke="#306CFE" d="m30.458 25.417l2.75 5.104a2.083 2.083 0 0 0 3.855-.334L41.667 11A2.188 2.188 0 0 0 39 8.333l-19.187 4.604a2.083 2.083 0 0 0-.334 3.855l5.104 2.75"></svg:path></svg:g>`,
})
export class MarketeqCursor2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCurtainsIcon],svg[marketeq-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 22.917v8.333"></svg:path><svg:path stroke="#306CFE" d="M8.333 22.917h33.334l-2.084-8.334H10.417zm0-8.334h33.334L39.583 6.25H10.417zm2.084 29.167h29.166V22.917H10.417zm33.333 0H6.25m37.5-37.5H6.25z"></svg:path></svg:g>`,
})
export class MarketeqCurtainsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCurveArrowRightIcon],svg[marketeq-curve-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 16.667c-14.791.583-20.833 12.77-20.833 25c0 0 8.083-11.855 20.833-12.5"></svg:path><svg:path stroke="#306CFE" d="M27.083 29.167V37.5L42.98 24.52a2.083 2.083 0 0 0 0-3.207L27.083 8.333v8.334"></svg:path></svg:g>`,
})
export class MarketeqCurveArrowRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCurveArrowRight3Icon],svg[marketeq-curve-arrow-right-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 33.333l11.688-8.791a2.083 2.083 0 0 0 0-3.25L31.25 12.5"></svg:path><svg:path stroke="#306CFE" d="M18.75 33.333v-6.25c-8.896 0-12.5 10.417-12.5 10.417c0-8.77 2.23-18.75 12.5-18.75V12.5l14.083 10.417z"></svg:path></svg:g>`,
})
export class MarketeqCurveArrowRight3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCurveArrowRight9Icon],svg[marketeq-curve-arrow-right-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m37.5 25l6.25-6.25l-6.25-6.25"></svg:path><svg:path stroke="#344054" d="M43.75 18.75h-8.937a22.6 22.6 0 0 0-20.23 12.5"></svg:path><svg:path stroke="#306CFE" d="M43.75 33.333v6.25a2.083 2.083 0 0 1-2.083 2.084H8.333a2.083 2.083 0 0 1-2.083-2.084V10.417a2.083 2.083 0 0 1 2.083-2.084H25"></svg:path></svg:g>`,
})
export class MarketeqCurveArrowRight9Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqCylinderIcon],svg[marketeq-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 43.75c6.904 0 12.5-1.865 12.5-4.167c0-2.3-5.596-4.166-12.5-4.166s-12.5 1.865-12.5 4.166S18.096 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M37.5 10.417v29.166c0 2.292-5.604 4.167-12.5 4.167s-12.5-1.875-12.5-4.167V10.417c0-2.292 5.604-4.167 12.5-4.167s12.5 1.875 12.5 4.167"></svg:path><svg:path stroke="#344054" d="M25 14.583c6.904 0 12.5-1.865 12.5-4.166S31.904 6.25 25 6.25s-12.5 1.865-12.5 4.167c0 2.3 5.596 4.166 12.5 4.166"></svg:path></svg:g>`,
})
export class MarketeqCylinderIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDashboardAltIcon],svg[marketeq-dashboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 18.75v22.917m-25-22.917h37.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDashboardAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDashboardAlt3Icon],svg[marketeq-dashboard-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M33.333 18.75L25 31.25"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25 31.208v.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 27.083a18.75 18.75 0 0 1-7 14.584h-23.5a18.75 18.75 0 1 1 30.5-14.584"></svg:path></svg:g>`,
})
export class MarketeqDashboardAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDatabase2Icon],svg[marketeq-database-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 18.75H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083v8.334a2.083 2.083 0 0 1-2.083 2.083m0 25H8.333a2.083 2.083 0 0 1-2.083-2.083v-8.334a2.083 2.083 0 0 1 2.083-2.083h33.334a2.083 2.083 0 0 1 2.083 2.083v8.334a2.083 2.083 0 0 1-2.083 2.083"></svg:path><svg:path stroke="#344054" d="M41.667 18.75H8.333c-1.15 0-2.083.933-2.083 2.083v8.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083v-8.334c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDatabase2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDateIcon],svg[marketeq-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833h37.5v20.834a2.083 2.083 0 0 1-2.083 2.083M43.75 12.5a2.083 2.083 0 0 0-2.083-2.083H8.333A2.083 2.083 0 0 0 6.25 12.5v8.333h37.5z"></svg:path><svg:path stroke="#344054" d="M33.333 6.25v8.333M16.667 6.25v8.333"></svg:path></svg:g>`,
})
export class MarketeqDateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDateAltAddIcon],svg[marketeq-date-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M15.708 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V10.417a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084V37.5a2.083 2.083 0 0 1-2.083 2.083h-7.375"></svg:path><svg:path stroke="#306CFE" d="M6.25 18.75h37.5m-18.75 0a12.5 12.5 0 1 0 0 25a12.5 12.5 0 0 0 0-25"></svg:path><svg:path stroke="#344054" d="M20.833 31.25h8.334m4.166-25v6.25zm-16.666 0v6.25zM25 35.417v-8.334z"></svg:path></svg:g>`,
})
export class MarketeqDateAltAddIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDateAltCheckIcon],svg[marketeq-date-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M15.708 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V10.417a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084V37.5a2.083 2.083 0 0 1-2.083 2.083h-7.375"></svg:path><svg:path stroke="#306CFE" d="M6.25 18.75h37.5m-18.75 0a12.5 12.5 0 1 0 0 25a12.5 12.5 0 0 0 0-25"></svg:path><svg:path stroke="#344054" d="M16.667 6.25v6.25m16.666-6.25v6.25zm-12.5 27.083l2.084 2.084l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqDateAltCheckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDateAltStarIcon],svg[marketeq-date-alt-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M15.708 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V10.417a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084V37.5a2.083 2.083 0 0 1-2.083 2.083h-7.375"></svg:path><svg:path stroke="#306CFE" d="M6.25 18.75h37.5m-18.75 0a12.5 12.5 0 1 0 0 25a12.5 12.5 0 0 0 0-25"></svg:path><svg:path stroke="#344054" d="M33.333 6.25v6.25zm-16.666 0v6.25zM25 34l2.708 1.417l-.52-3.021l2.083-2.084l-3.021-.437L25 27.083l-1.354 2.75l-3.021.438l2.083 2.083l-.416 3.063z"></svg:path></svg:g>`,
})
export class MarketeqDateAltStarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDebitPurchaseIcon],svg[marketeq-debit-purchase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M43.75 18.75H6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDebitPurchaseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDecreaseCircleIcon],svg[marketeq-decrease-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.833 25H16.167"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDecreaseCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeleteIcon],svg[marketeq-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 14.583v-6.25A2.083 2.083 0 0 0 31.25 6.25h-12.5a2.083 2.083 0 0 0-2.083 2.083v6.25"></svg:path><svg:path stroke="#306CFE" d="M8.333 14.583h33.334M37.5 41.667V14.583h-25v27.084a2.083 2.083 0 0 0 2.083 2.083h20.834a2.083 2.083 0 0 0 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDeleteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeleteAlt2Icon],svg[marketeq-delete-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 22.917v12.5m8.333-20.834v-6.25A2.083 2.083 0 0 0 31.25 6.25h-12.5a2.083 2.083 0 0 0-2.083 2.083v6.25z"></svg:path><svg:path stroke="#306CFE" d="M8.333 14.583h33.334zm27.23 27.23l1.937-27.23h-25l1.938 27.23a2.083 2.083 0 0 0 2.083 1.937h16.958a2.084 2.084 0 0 0 2.084-1.938"></svg:path></svg:g>`,
})
export class MarketeqDeleteAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeleteCollectionIcon],svg[marketeq-delete-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m16.417 16.417l8.833 8.833m-8.833 0l8.833-8.833"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25h-25c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h25c1.15 0 2.084-.933 2.084-2.084v-25c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#306CFE" d="M14.583 43.75h27.084a2.083 2.083 0 0 0 2.083-2.083v-31.25"></svg:path></svg:g>`,
})
export class MarketeqDeleteCollectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeliveryTruckIcon],svg[marketeq-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M19.104 35.417h7.98V12.5A2.083 2.083 0 0 0 25 10.417H10.417M6.25 27.083v6.25a2.083 2.083 0 0 0 2.083 2.084h1.813"></svg:path><svg:path stroke="#306CFE" d="M30.98 35.417h-3.897V14.584h8.855a2.08 2.08 0 0 1 2.083 1.52l1.562 5.771l2.584.646a2.08 2.08 0 0 1 1.583 2.083v8.73a2.083 2.083 0 0 1-2.083 2.083h-1.855"></svg:path><svg:path stroke="#344054" d="M6.25 18.75h12.5m-4.167 12.5a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333m20.834 0a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqDeliveryTruckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeltaIcon],svg[marketeq-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.583 43.75L23.958 8.604zm2.084 0L25 6.25L8.333 43.75z"></svg:path>`,
})
export class MarketeqDeltaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeltaSquareIcon],svg[marketeq-delta-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.958 16.667l9.375 18.75m2.084 0L25 14.583L14.583 35.417z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDeltaSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDesk2Icon],svg[marketeq-desk-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 20.833V37.5m-33.334-25v25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h37.5M25 20.833h16.667V12.5H25zm0 8.334h16.667v-8.334H25z"></svg:path></svg:g>`,
})
export class MarketeqDesk2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDesk6Icon],svg[marketeq-desk-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 12.5v25m33.334-25v25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h37.5M8.333 29.167h33.334V12.5H8.333z"></svg:path></svg:g>`,
})
export class MarketeqDesk6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDeskLampRoundIcon],svg[marketeq-desk-lamp-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 43.75V21.083A8.334 8.334 0 0 1 18.75 13L25 11.417M6.25 43.75h20.833m7.959-30.562l-2.084-4.521a4.17 4.17 0 1 0-7.562 3.52l2.083 4.417"></svg:path><svg:path stroke="#344054" d="M30.917 14.187a8.333 8.333 0 0 1 11.075 4.03l1.76 3.777l-15.105 7.044l-1.76-3.776a8.33 8.33 0 0 1 4.03-11.075"></svg:path></svg:g>`,
})
export class MarketeqDeskLampRoundIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDiagramBar2Icon],svg[marketeq-diagram-bar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 35.417H14.583m4.167-25h-4.167zm4.167 8.333h-8.334zm4.166 8.333h-12.5z"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25v35.417a2.083 2.083 0 0 0 2.083 2.083H43.75"></svg:path></svg:g>`,
})
export class MarketeqDiagramBar2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDiagramBar3Icon],svg[marketeq-diagram-bar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 18.75v12.5m-8.334-8.333v8.333zm-8.333-8.334V31.25z"></svg:path><svg:path stroke="#306CFE" d="M10.417 6.25v37.5M6.25 39.583h37.5z"></svg:path></svg:g>`,
})
export class MarketeqDiagramBar3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDiameterIcon],svg[marketeq-diameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 27.083L35.417 25l-2.084-2.083m-16.666 0L14.583 25l2.084 2.083M14.583 25h20.834"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDiameterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDiameterCircleIcon],svg[marketeq-diameter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25 24.896v.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M43.75 25H6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDiameterCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDirectionIcon],svg[marketeq-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M14.583 43.75H31.25zm12.5-31.25V8.333A2.083 2.083 0 0 0 25 6.25h-4.167a2.083 2.083 0 0 0-2.083 2.083V12.5zM18.75 25v18.75h8.333V25z"></svg:path><svg:path stroke="#344054" d="M12.5 12.5a2.083 2.083 0 0 0-2.083 2.083v8.334A2.083 2.083 0 0 0 12.5 25h22.23a2.08 2.08 0 0 0 1.728-.937l2.771-4.167a2.08 2.08 0 0 0 0-2.292l-2.77-4.166a2.08 2.08 0 0 0-1.73-.938z"></svg:path></svg:g>`,
})
export class MarketeqDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDirectionSignIcon],svg[marketeq-direction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.23 17.354l-1.876-2.083a2.08 2.08 0 0 0-1.541-.688H29.167v8.334h10.645a2.08 2.08 0 0 0 1.542-.688l1.875-2.083a2.083 2.083 0 0 0 0-2.792M6.77 24.313l1.876 2.083a2.08 2.08 0 0 0 1.541.687h10.646V18.75H10.188a2.08 2.08 0 0 0-1.542.688L6.77 21.52a2.083 2.083 0 0 0 0 2.791"></svg:path><svg:path stroke="#306CFE" d="M16.667 43.75h16.666m-4.166 0h-8.334V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a2.083 2.083 0 0 1 2.084 2.083z"></svg:path></svg:g>`,
})
export class MarketeqDirectionSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDiscountIcon],svg[marketeq-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M30.104 30.208h.209M19.688 19.792h.208z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="m18.75 31.25l12.5-12.5"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M42.125 19.438c-.625-1.896-.208-4.334-1.354-5.896s-3.604-1.959-5.188-3.125C34 9.25 32.917 7.063 31.021 6.458C29.125 5.854 27.083 7 25 7s-4.167-1.146-6.02-.542c-1.855.605-2.98 2.834-4.563 3.959c-1.584 1.125-4 1.52-5.188 3.125s-.729 4-1.354 5.896S5.5 22.917 5.5 25s1.792 3.73 2.375 5.563s.208 4.333 1.354 5.895c1.146 1.563 3.604 1.959 5.188 3.105s2.666 3.375 4.562 3.979S22.917 43 25 43s4.167 1.146 6.02.542c1.855-.604 2.98-2.834 4.563-3.98c1.584-1.145 4.042-1.5 5.188-3.104s.729-4 1.354-5.895C42.75 28.667 44.5 27.083 44.5 25s-1.792-3.73-2.375-5.562"></svg:path></svg:g>`,
})
export class MarketeqDiscountIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDisketteIcon],svg[marketeq-diskette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 31.25H16.667v12.5h16.666zm-2.083-25h-12.5v8.333h12.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 14.583v27.084a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083h22.916z"></svg:path></svg:g>`,
})
export class MarketeqDisketteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDivideIcon],svg[marketeq-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 8.333a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333M29.167 37.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#306CFE" d="M6.25 25h37.5"></svg:path></svg:g>`,
})
export class MarketeqDivideIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDivideCircleIcon],svg[marketeq-divide-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 15.625h.208m-.208 18.75h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M14.583 25h20.834"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDivideCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDivideSquareIcon],svg[marketeq-divide-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 15.625h.208m-.208 18.75h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M14.583 25h20.834"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDivideSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDomeIcon],svg[marketeq-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 27.083h-8.334v12.5h8.334z"></svg:path><svg:path stroke="#306CFE" d="M6.25 39.583h37.5m-2.083 0H8.333v-12.5A16.667 16.667 0 0 1 25 10.417v0a16.667 16.667 0 0 1 16.667 16.666z"></svg:path></svg:g>`,
})
export class MarketeqDomeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoneCollectionIcon],svg[marketeq-done-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 20.063l4.688 4.687l7.812-7.812"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25h-25c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h25c1.15 0 2.084-.933 2.084-2.084v-25c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#306CFE" d="M14.583 43.75h27.084a2.083 2.083 0 0 0 2.083-2.083v-31.25"></svg:path></svg:g>`,
})
export class MarketeqDoneCollectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDonePlaylist2Icon],svg[marketeq-done-playlist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m35.417 11.292l2.77 2.937l5.563-5.896m-14.583 31.25H43.75M29.167 31.25H43.75z"></svg:path><svg:path stroke="#306CFE" d="M20.833 36.458V6.25zm-7.291-7.291a7.292 7.292 0 1 0 0 14.583a7.292 7.292 0 0 0 0-14.583"></svg:path></svg:g>`,
})
export class MarketeqDonePlaylist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoorHandleIcon],svg[marketeq-door-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M29.167 22.917v10.416a10.416 10.416 0 1 1-20.834 0V16.667A10.417 10.417 0 0 1 18.75 6.25v0a10.42 10.42 0 0 1 10.208 8.333"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M37.5 22.917H22.917a4.167 4.167 0 1 1 0-8.334H37.5a4.167 4.167 0 1 1 0 8.334"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M18.646 33.333h.208"></svg:path></svg:g>`,
})
export class MarketeqDoorHandleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleDownSignIcon],svg[marketeq-double-down-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 10.417L25 20.833L6.25 10.417"></svg:path><svg:path stroke="#306CFE" d="M43.75 29.167L25 39.583L6.25 29.167"></svg:path></svg:g>`,
})
export class MarketeqDoubleDownSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleDownSignSquareIcon],svg[marketeq-double-down-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 27.083L25 33.333l-6.25-6.25m12.5-10.416L25 22.917l-6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDoubleDownSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleLeftSignIcon],svg[marketeq-double-left-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 6.25L29.167 25l10.416 18.75"></svg:path><svg:path stroke="#306CFE" d="M20.833 6.25L10.417 25l10.416 18.75"></svg:path></svg:g>`,
})
export class MarketeqDoubleLeftSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleLeftSignCircleIcon],svg[marketeq-double-left-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M21.875 18.75L15.625 25l6.25 6.25m10.417-12.5L26.042 25l6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDoubleLeftSignCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleLeftSignSquareIcon],svg[marketeq-double-left-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 31.25L16.667 25l6.25-6.25m10.416 12.5L27.083 25l6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqDoubleLeftSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleRightSignIcon],svg[marketeq-double-right-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 43.75L20.833 25L10.417 6.25"></svg:path><svg:path stroke="#306CFE" d="M29.167 43.75L39.583 25L29.167 6.25"></svg:path></svg:g>`,
})
export class MarketeqDoubleRightSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleRightSignCircleIcon],svg[marketeq-double-right-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m28.125 31.25l6.25-6.25l-6.25-6.25m-10.417 12.5l6.25-6.25l-6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqDoubleRightSignCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleRightSignSquareIcon],svg[marketeq-double-right-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m27.083 18.75l6.25 6.25l-6.25 6.25m-10.416-12.5l6.25 6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDoubleRightSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleUpScrollBarIcon],svg[marketeq-double-up-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 25h-25"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417L25 6.25l4.167 4.167M20.833 37.5L25 33.333l4.167 4.167M25 33.333V43.75m0-27.083V6.25z"></svg:path></svg:g>`,
})
export class MarketeqDoubleUpScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleUpSignIcon],svg[marketeq-double-up-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 39.583L25 29.167L6.25 39.583"></svg:path><svg:path stroke="#306CFE" d="M43.75 20.833L25 10.417L6.25 20.833"></svg:path></svg:g>`,
})
export class MarketeqDoubleUpSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleUpSignSquareIcon],svg[marketeq-double-up-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 22.917l6.25-6.25l6.25 6.25m-12.5 10.416l6.25-6.25l6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M6.25 8.333v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqDoubleUpSignSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownArrowIcon],svg[marketeq-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 6.25v37.5"></svg:path><svg:path stroke="#344054" d="M18.75 37.5L25 43.75l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqDownArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownDirection2Icon],svg[marketeq-down-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.146 13.104L25 25.958l12.854-12.854"></svg:path><svg:path stroke="#306CFE" d="m37.854 13.104l5.896 5.875l-17.27 17.292a2.08 2.08 0 0 1-2.96 0L6.25 19l5.896-5.897"></svg:path></svg:g>`,
})
export class MarketeqDownDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownJunctionSignIcon],svg[marketeq-down-junction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 6.25H16.667m25 8.333h2.083zm0-8.333h2.083zM8.333 14.583H6.25zm0-8.333H6.25z"></svg:path><svg:path stroke="#306CFE" d="M16.667 14.583h4.166V31.25h-6.25l8.813 10.583a2.083 2.083 0 0 0 3.208 0l8.813-10.583h-6.25V14.583h4.166"></svg:path></svg:g>`,
})
export class MarketeqDownJunctionSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownOctagonIcon],svg[marketeq-down-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 16.667v16.666m5.208-5.208L25 33.333l-5.208-5.208"></svg:path><svg:path stroke="#306CFE" d="M6.25 32.77V17.23L17.23 6.25h15.54l10.98 10.98v15.54L32.77 43.75H17.23z"></svg:path></svg:g>`,
})
export class MarketeqDownOctagonIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownTrendIcon],svg[marketeq-down-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m6.25 12.5l16.667 16.667l6.25-6.25L43.75 37.5"></svg:path><svg:path stroke="#344054" d="M35.417 37.5h8.333v-8.333"></svg:path></svg:g>`,
})
export class MarketeqDownTrendIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownUpScrollBarIcon],svg[marketeq-down-up-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 25h-25"></svg:path><svg:path stroke="#306CFE" d="M20.833 37.5L25 33.333l4.167 4.167m0-25L25 16.667L20.833 12.5M25 33.333V43.75m0-37.5v10.417z"></svg:path></svg:g>`,
})
export class MarketeqDownUpScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownload5Icon],svg[marketeq-download-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 29.167L25 35.417l-6.25-6.25m6.25 6.25V6.25"></svg:path><svg:path stroke="#306CFE" d="M8.333 35.417v6.25a2.083 2.083 0 0 0 2.084 2.083h29.166a2.083 2.083 0 0 0 2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqDownload5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownloadAlt4Icon],svg[marketeq-download-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 25v18.75m-6.48-6.25l6.626 6.625l6.333-6.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 31.48a13.73 13.73 0 1 1 20.833-15.084a9.5 9.5 0 0 1 1.73-.167A8.729 8.729 0 0 1 37.5 33.333"></svg:path></svg:g>`,
})
export class MarketeqDownloadAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDownloadAlt5Icon],svg[marketeq-download-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v16.667m-6.25-6.25l6.25 6.25l6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083L37.98 9.75A2.08 2.08 0 0 0 36 8.333h-2.667m-16.666 0H14a2.08 2.08 0 0 0-2.083 1.417L6.25 27.083m37.5 0v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V27.083h10.417a8.333 8.333 0 1 0 16.666 0z"></svg:path></svg:g>`,
})
export class MarketeqDownloadAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDrawers2Icon],svg[marketeq-drawers-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 37.5v4.167M10.417 37.5v4.167z"></svg:path><svg:path stroke="#306CFE" d="M6.25 8.333h37.5M10.417 37.5h29.166a2.083 2.083 0 0 0 2.084-2.083v-18.75H8.333v18.75a2.083 2.083 0 0 0 2.084 2.083m0 0H25V16.667H8.333v18.75a2.083 2.083 0 0 0 2.084 2.083M8.333 16.667h33.334V8.333H8.333z"></svg:path></svg:g>`,
})
export class MarketeqDrawers2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDrawers3Icon],svg[marketeq-drawers-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 20.833V25m-16.666 0v-4.167z"></svg:path><svg:path stroke="#306CFE" d="M43.75 6.25H6.25m4.167 37.5h29.166a2.083 2.083 0 0 0 2.084-2.083V6.25H8.333v35.417a2.083 2.083 0 0 0 2.084 2.083m0 0H25V6.25H8.333v35.417a2.083 2.083 0 0 0 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqDrawers3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDrawingTabletPencilIcon],svg[marketeq-drawing-tablet-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 16.667h6.25a2.083 2.083 0 0 1 2.083 2.083v22.917a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V18.75a2.083 2.083 0 0 1 2.083-2.083h14.584"></svg:path><svg:path stroke="#306CFE" d="M8.333 16.667A2.083 2.083 0 0 0 6.25 18.75v22.917a2.083 2.083 0 0 0 2.083 2.083h6.25V16.667zM38.98 9.77l-2.916-2.917a2.083 2.083 0 0 0-2.917 0l-10.23 10.23v5.833h5.834l10.23-10.23a2.083 2.083 0 0 0 0-2.916"></svg:path></svg:g>`,
})
export class MarketeqDrawingTabletPencilIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqDumbbell3Icon],svg[marketeq-dumbbell-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 20.02l-1.979-8.708a4.167 4.167 0 0 1 4.063-5.062h16.666a4.167 4.167 0 0 1 4.167 5.062l-2.083 8.75M18.75 35.417h12.5"></svg:path><svg:path stroke="#306CFE" d="M35.792 43.75H14.208a4.17 4.17 0 0 1-3.562-1.958a16.666 16.666 0 1 1 28.687 0a4.17 4.17 0 0 1-3.541 1.958"></svg:path></svg:g>`,
})
export class MarketeqDumbbell3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEarphoneIcon],svg[marketeq-earphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 18.75v25m-25 0v-25z"></svg:path><svg:path stroke="#306CFE" d="M14.583 18.75h-4.166a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a6.25 6.25 0 0 1 6.25 6.25v0a6.25 6.25 0 0 1-6.25 6.25m20.834 0h4.166a2.083 2.083 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083h-4.166a6.25 6.25 0 0 0-6.25 6.25v0a6.25 6.25 0 0 0 6.25 6.25"></svg:path></svg:g>`,
})
export class MarketeqEarphoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEarphoneBluetoothIcon],svg[marketeq-earphone-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M13.688 26.604a14.4 14.4 0 0 1-1.188-5.77a14.583 14.583 0 1 1 29.167 0M18.75 33.333l-2.083 2.084"></svg:path><svg:path stroke="#306CFE" d="M35.82 28.042L22.56 41.3a8.333 8.333 0 0 1-11.785-11.785l13.259-13.259a2.083 2.083 0 0 1 2.946 0l8.839 8.84a2.083 2.083 0 0 1 0 2.946"></svg:path></svg:g>`,
})
export class MarketeqEarphoneBluetoothIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEditAlt5Icon],svg[marketeq-edit-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.667 17.167L15.083 43.75H6.25v-8.833L32.833 8.333a6.25 6.25 0 0 1 8.834 0v0a6.25 6.25 0 0 1 0 8.834"></svg:path>`,
})
export class MarketeqEditAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEditAlt6Icon],svg[marketeq-edit-alt-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M42.52 13.354L36.647 7.48a2.083 2.083 0 0 0-2.959 0l-6 6l8.834 8.834l6-6a2.084 2.084 0 0 0 0-2.959"></svg:path><svg:path stroke="#306CFE" d="m21.813 19.354l8.833 8.834L15.083 43.75H6.25v-8.833z"></svg:path></svg:g>`,
})
export class MarketeqEditAlt6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEditCircleIcon],svg[marketeq-edit-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m28.708 27.188l-5.791-.105v-5.791L36.312 7.896a2.083 2.083 0 0 1 2.938 0l2.958 2.958a2.083 2.083 0 0 1 0 2.938z"></svg:path><svg:path stroke="#306CFE" d="M43.75 25A18.75 18.75 0 1 1 25 6.25"></svg:path></svg:g>`,
})
export class MarketeqEditCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEditUser6Icon],svg[marketeq-edit-user-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.146 33.52l-10.23 10.23h-5.833v-5.833l10.23-10.23a2.084 2.084 0 0 1 2.916 0l2.917 2.917a2.084 2.084 0 0 1 0 2.917"></svg:path><svg:path stroke="#306CFE" d="M35.417 19.313q.015-.282 0-.563A12.5 12.5 0 1 0 22 31.25"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75c-9.27-.77-12.5-4.167-12.5-4.167V37.5a10.42 10.42 0 0 1 7.27-9.896"></svg:path></svg:g>`,
})
export class MarketeqEditUser6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEmailFileIcon],svg[marketeq-email-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 6.25v4.167H37.5zm-9.479 24.23a2.08 2.08 0 0 0 2.292 0L37.5 22.916v-12.5L33.333 6.25h-18.75A2.083 2.083 0 0 0 12.5 8.333v14.584z"></svg:path><svg:path stroke="#306CFE" d="m26.146 30.48l14.375-9.647a2.083 2.083 0 0 1 3.229 1.73v19.104a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V22.646a2.084 2.084 0 0 1 3.23-1.813l14.374 9.563a2.08 2.08 0 0 0 2.292.083"></svg:path></svg:g>`,
})
export class MarketeqEmailFileIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEmailOpenIcon],svg[marketeq-email-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M23.854 30.48a2.08 2.08 0 0 0 2.292 0L37.5 22.916V6.25h-25v16.667z"></svg:path><svg:path stroke="#306CFE" d="m26.146 30.48l14.375-9.647a2.083 2.083 0 0 1 3.229 1.73v19.104a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V22.646a2.084 2.084 0 0 1 3.23-1.813l14.374 9.563a2.08 2.08 0 0 0 2.292.083"></svg:path></svg:g>`,
})
export class MarketeqEmailOpenIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEnvelopeIcon],svg[marketeq-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 18.75l9.125 7.27a2.08 2.08 0 0 0 2.584 0l9.125-7.27"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.932-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqEnvelopeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqExchangeIcon],svg[marketeq-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 35.417l-6.25-6.25h33.334"></svg:path><svg:path stroke="#306CFE" d="m35.417 14.583l6.25 6.25H8.333"></svg:path></svg:g>`,
})
export class MarketeqExchangeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqExclamationIcon],svg[marketeq-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M27.083 6.25h-4.166c-1.15 0-2.084.933-2.084 2.083V25c0 1.15.933 2.083 2.084 2.083h4.166c1.15 0 2.084-.932 2.084-2.083V8.333c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#344054" d="M25 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqExclamationIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqExport2Icon],svg[marketeq-export-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 6.25h12.5v12.5m-20.833 8.333L43.75 6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h14.584"></svg:path></svg:g>`,
})
export class MarketeqExport2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEyeIcon],svg[marketeq-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 25S33.063 33.333 25 33.333C16.938 33.333 10.417 25 10.417 25s6.52-8.333 14.583-8.333S39.583 25 39.583 25M25 20.833a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 14.583v-6.25A2.083 2.083 0 0 1 8.333 6.25h6.25m29.167 8.333v-6.25a2.083 2.083 0 0 0-2.083-2.083h-6.25M6.25 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h6.25m29.167-8.333v6.25a2.083 2.083 0 0 1-2.083 2.083h-6.25"></svg:path></svg:g>`,
})
export class MarketeqEyeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqEyeAltIcon],svg[marketeq-eye-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M35.417 25S30.75 31.25 25 31.25S14.583 25 14.583 25S19.25 18.75 25 18.75S35.417 25 35.417 25"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 25h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqEyeAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFastBackwardIcon],svg[marketeq-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m25 25l18.75 12.5v-25z"></svg:path><svg:path stroke="#306CFE" d="M25 12.5v25L6.25 25z"></svg:path></svg:g>`,
})
export class MarketeqFastBackwardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFastBackwardCircleIcon],svg[marketeq-fast-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 25l8.334 6.25v-12.5zm8.334 0l8.333 6.25v-12.5z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqFastBackwardCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFastForwardIcon],svg[marketeq-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 12.5v25L25 25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 25L25 37.5v-25z"></svg:path></svg:g>`,
})
export class MarketeqFastForwardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFastForwardCircleIcon],svg[marketeq-fast-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 18.75v12.5L35.417 25zm-8.333 0v12.5L27.083 25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqFastForwardCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFavouriteIcon],svg[marketeq-favourite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40.77 11.333a10.23 10.23 0 0 1 0 14.438L25 41.667L9.23 25.77a10.229 10.229 0 0 1 7.166-17.438a10.2 10.2 0 0 1 7.166 3A9.3 9.3 0 0 1 25 13.167a9.3 9.3 0 0 1 1.438-1.834a10.06 10.06 0 0 1 14.333 0"></svg:path>`,
})
export class MarketeqFavouriteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFavouriteAltIcon],svg[marketeq-favourite-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 18.75c0 17.042-18.75 25-18.75 25s-18.75-7.875-18.75-25a9.98 9.98 0 0 1 9.375-10.417A9.98 9.98 0 0 1 25 18.75a9.98 9.98 0 0 1 9.375-10.417A9.98 9.98 0 0 1 43.75 18.75"></svg:path>`,
})
export class MarketeqFavouriteAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFile3Icon],svg[marketeq-file-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h14.583l12.5 12.5v22.917A2.083 2.083 0 0 1 37.5 43.75"></svg:path><svg:path stroke="#344054" d="m39.583 18.75l-12.5-12.5L25 16.667z"></svg:path></svg:g>`,
})
export class MarketeqFile3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFile6Icon],svg[marketeq-file-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 18.75h12.5m0 16.667h-12.5zm-12.5-8.334h12.5z"></svg:path><svg:path stroke="#306CFE" d="M39.583 10.417v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h22.917zM35.417 6.25v4.167h4.166z"></svg:path></svg:g>`,
})
export class MarketeqFile6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFileFavorite8Icon],svg[marketeq-file-favorite-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 18.75h12.5m8.334 10.417l-2.584 4.791l-5.75.771l4.167 3.75l-.98 5.271l5.147-2.5l5.145 2.5l-.979-5.27l4.167-3.75l-5.75-.772zm-20.834-2.084h12.5z"></svg:path><svg:path stroke="#306CFE" d="M20.833 43.75h-12.5a2.083 2.083 0 0 1-2.083-2.083V14.583l8.333-8.333h18.75a2.083 2.083 0 0 1 2.084 2.083v12.5"></svg:path></svg:g>`,
})
export class MarketeqFileFavorite8Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFileFolderApproved2Icon],svg[marketeq-file-folder-approved-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 39.583l4.167 4.167l8.333-8.333M35.417 6.25H12.5a2.083 2.083 0 0 0-2.083 2.083V18.75h8.333l4.167 4.167h16.666v-12.5zm0 0v4.167h4.166z"></svg:path><svg:path stroke="#306CFE" d="M22.917 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833a2.083 2.083 0 0 1 2.083-2.083H18.75l4.167 4.167h18.75A2.083 2.083 0 0 1 43.75 25v2.083"></svg:path></svg:g>`,
})
export class MarketeqFileFolderApproved2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFileMusic2Icon],svg[marketeq-file-music-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 33.333a6.04 6.04 0 0 0-6.25-6.25v12.5"></svg:path><svg:path stroke="#344054" d="M29.167 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#306CFE" d="M39.583 18.75V8.333A2.083 2.083 0 0 0 37.5 6.25H14.583l-4.166 4.167v31.25A2.083 2.083 0 0 0 12.5 43.75h4.167"></svg:path><svg:path stroke="#306CFE" d="M10.417 10.417h4.166V6.25z"></svg:path></svg:g>`,
})
export class MarketeqFileMusic2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFileVideo4Icon],svg[marketeq-file-video-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m27.083 25l-4.166-3.125v6.25z"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75a2.083 2.083 0 0 1-2.083-2.083V14.583L18.75 6.25H37.5a2.083 2.083 0 0 1 2.083 2.083v33.334A2.083 2.083 0 0 1 37.5 43.75z"></svg:path></svg:g>`,
})
export class MarketeqFileVideo4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFileZipIcon],svg[marketeq-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 22.917h4.167M20.833 6.25v20.833zm-2.083 8.333h4.167z"></svg:path><svg:path stroke="#306CFE" d="M39.583 10.417v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h22.917zM35.417 6.25v4.167h4.166z"></svg:path></svg:g>`,
})
export class MarketeqFileZipIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilesIcon],svg[marketeq-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M16.77 35.417h-.207m16.875 0h-.209"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M33.333 12.5v8.333M16.667 12.5v8.333z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M22.917 45.833h-12.5a2.083 2.083 0 0 1-2.084-2.083V6.25a2.083 2.083 0 0 1 2.084-2.083h12.5A2.083 2.083 0 0 1 25 6.25v37.5a2.083 2.083 0 0 1-2.083 2.083m18.75-2.083V6.25a2.083 2.083 0 0 0-2.084-2.083h-12.5A2.083 2.083 0 0 0 25 6.25v37.5a2.083 2.083 0 0 0 2.083 2.083h12.5a2.083 2.083 0 0 0 2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqFilesIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilmMovieIcon],svg[marketeq-film-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417v8.333h12.5v-8.333zm-12.5 0v8.333H25v-8.333zM6.25 43.75h37.5zM37.5 14.583V6.25H25v8.333zm-12.5 0V6.25H12.5v8.333zM6.25 6.25h37.5zM27.083 25l-4.166-3.125v6.25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 33.333V16.667a2.084 2.084 0 0 0-2.083-2.084H8.333c-1.15 0-2.083.933-2.083 2.084v16.666c0 1.15.933 2.084 2.083 2.084h33.334c1.15 0 2.083-.933 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqFilmMovieIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilmRollIcon],svg[marketeq-film-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M22.813 17.708h.208M15.52 25h.21m7.29 7.292h-.207M30.104 25h.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M37.333 33.333a16.67 16.67 0 0 1-14.416 8.334H43.75a2.083 2.083 0 0 0 2.083-2.084v-4.166a2.083 2.083 0 0 0-2.083-2.084zM39.583 25a16.666 16.666 0 1 1-33.332 0a16.666 16.666 0 0 1 33.332 0"></svg:path></svg:g>`,
})
export class MarketeqFilmRollIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterIcon],svg[marketeq-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.417 8.333v5.5c-.001.487.168.959.479 1.334L20.354 26.5c.31.375.48.847.48 1.333V43.75l8.333-4.167v-11.75a2.08 2.08 0 0 1 .479-1.333l9.458-11.333c.31-.375.48-.847.48-1.334v-5.5A2.083 2.083 0 0 0 37.5 6.25h-25a2.083 2.083 0 0 0-2.083 2.083"></svg:path>`,
})
export class MarketeqFilterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterAltIcon],svg[marketeq-filter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 20.833V6.25m-29.166 0v29.167zM25 14.583V43.75zm14.583 14.584V43.75z"></svg:path><svg:path stroke="#344054" d="M10.417 35.417a4.166 4.166 0 1 0 0 8.332a4.166 4.166 0 0 0 0-8.332M25 6.25a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333m14.583 14.583a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqFilterAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterAlt4Icon],svg[marketeq-filter-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.27 9.708l11.563 13.209V43.75l8.334-4.167V22.917L40.729 9.708a2.083 2.083 0 0 0-1.562-3.458H10.833a2.083 2.083 0 0 0-1.562 3.458"></svg:path>`,
})
export class MarketeqFilterAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterAlt5Icon],svg[marketeq-filter-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 25h29.166"></svg:path><svg:path stroke="#306CFE" d="M14.583 35.417h20.834M6.25 14.583h37.5z"></svg:path></svg:g>`,
})
export class MarketeqFilterAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFireLeftIcon],svg[marketeq-fire-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 43.75c8.125 0 14.583-4.167 14.583-14.583S29.167 18.75 29.167 6.25c-6.25 4.167-9.105 8.542-10.417 16.667a10.42 10.42 0 0 1-4.167-6.25C12.5 18.75 10.417 25 10.417 29.167c0 6.541 2.666 14.583 14.583 14.583"></svg:path>`,
})
export class MarketeqFireLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFireplaceIcon],svg[marketeq-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 14.583h16.666zm14.812 22.688a10.8 10.8 0 0 0-1.333-5.563A4.5 4.5 0 0 1 27.77 34.5a9.6 9.6 0 0 0-4.604-7.417c0 5.563-4.646 5.563-4.646 10.188A6.354 6.354 0 0 0 25 43.75c5.563 0 6.48-3.563 6.48-6.48"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25h37.5m-2.083 37.5H8.333V6.25h33.334zm-35.417 0h37.5z"></svg:path></svg:g>`,
})
export class MarketeqFireplaceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFishingHookIcon],svg[marketeq-fishing-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m31.25 33.333l4.167-2.083v4.167a8.333 8.333 0 0 1-16.667 0V20.833m0-8.333V6.25"></svg:path><svg:path stroke="#344054" d="M18.75 20.833a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqFishingHookIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFlask2Icon],svg[marketeq-flask-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 31.25a12.5 12.5 0 1 1-16.667-11.77V6.25h8.334v13.23A12.5 12.5 0 0 1 37.5 31.25"></svg:path><svg:path stroke="#344054" d="M18.75 6.25h12.5"></svg:path></svg:g>`,
})
export class MarketeqFlask2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFlask3Icon],svg[marketeq-flask-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 43.75h-25a2.084 2.084 0 0 1-1.833-3.062l10.166-18.896V6.25h8.334v15.542l10.166 18.896A2.083 2.083 0 0 1 37.5 43.75"></svg:path><svg:path stroke="#344054" d="M18.75 6.25h12.5"></svg:path></svg:g>`,
})
export class MarketeqFlask3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFloorLampIcon],svg[marketeq-floor-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 43.75h8.334m-4.167 0V20.833z"></svg:path><svg:path stroke="#306CFE" d="M35.417 20.833a28.3 28.3 0 0 1-4.063-12.708a2.083 2.083 0 0 0-2.083-1.875h-8.563a2.083 2.083 0 0 0-2.083 1.875a28.3 28.3 0 0 1-4.042 12.708z"></svg:path></svg:g>`,
})
export class MarketeqFloorLampIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFloppyDiskAlertIcon],svg[marketeq-floppy-disk-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 27.083v6.25"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 42.708h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 43.75h4.166a2.083 2.083 0 0 0 2.084-2.083V14.583L33.333 6.25H10.417a2.083 2.083 0 0 0-2.084 2.083v33.334a2.083 2.083 0 0 0 2.084 2.083h4.166"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M31.25 6.25h-12.5v8.333h12.5z"></svg:path></svg:g>`,
})
export class MarketeqFloppyDiskAlertIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFootballBallIcon],svg[marketeq-football-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.146 6.896L25 10.416l4.854-3.52M6.292 24.02l4.833-3.52l-1.833-5.708M37.5 37.5l-4-.083l-1.52 4.958M12.5 37.5l4-.083l1.52 4.958m22.71-27.583L38.874 20.5l4.833 3.52M25 16.667v-6.25zm-7.48 5.52L11.126 20.5zm2.98 9.063l-4.062 6.25zm9 0l4.063 6.25zm2.792-9.02l6.583-1.73zM25 16.666l-7.292 5.562L20.5 31.25h9l2.792-9.02z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqFootballBallIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqForest2Icon],svg[marketeq-forest-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M27.083 17.708a7.27 7.27 0 0 0-4.354-6.666a6.25 6.25 0 0 0-12.125 0a7.27 7.27 0 0 0 0 13.333a6.25 6.25 0 0 0 12.125 0a7.27 7.27 0 0 0 4.354-6.667"></svg:path><svg:path stroke="#344054" d="M16.667 18.75v25m22.916-12.5v12.5"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m0-16.667v-6.25a4.167 4.167 0 0 0-8.333 0v6.25a4.167 4.167 0 1 0 8.333 0"></svg:path></svg:g>`,
})
export class MarketeqForest2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqForkliftIcon],svg[marketeq-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 37.5h-8.333v-25m-25 25H8.333a2.083 2.083 0 0 1-2.083-2.083v-12.5a2.083 2.083 0 0 1 2.083-2.084h7.042a2.08 2.08 0 0 1 1.875 1.146L18.75 25h16.667v12.5m-8.334 0h-8.166"></svg:path><svg:path stroke="#306CFE" d="M10.417 20.583V10.417A2.083 2.083 0 0 1 12.5 8.333h8.792a2.08 2.08 0 0 1 2.083 1.584l3.708 14.812"></svg:path><svg:path stroke="#344054" d="M31.25 33.333a4.166 4.166 0 1 1 0 8.333a4.166 4.166 0 0 1 0-8.333M10.417 37.5a4.167 4.167 0 1 0 8.334 0a4.167 4.167 0 0 0-8.334 0"></svg:path></svg:g>`,
})
export class MarketeqForkliftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqForward2Icon],svg[marketeq-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 43.75V6.25"></svg:path><svg:path stroke="#306CFE" d="M10.417 10.417v29.166L31.25 25z"></svg:path></svg:g>`,
})
export class MarketeqForward2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFryingPanIcon],svg[marketeq-frying-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.458 28.688L41.5 34.25a5.207 5.207 0 0 1-1.197 9.17a5.21 5.21 0 0 1-6.053-1.92l-5.583-8.062"></svg:path><svg:path stroke="#306CFE" d="M20.833 35.417c8.055 0 14.584-6.53 14.584-14.584S28.887 6.25 20.833 6.25S6.25 12.78 6.25 20.833c0 8.055 6.53 14.584 14.583 14.584"></svg:path></svg:g>`,
})
export class MarketeqFryingPanIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqFullCrossCircleIcon],svg[marketeq-full-cross-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 31.25l12.5-12.5m-12.5 0l12.5 12.5"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqFullCrossCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGalleryIcon],svg[marketeq-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M18.146 20.833L6.25 32.771v6.812a2.084 2.084 0 0 0 2.083 2.084h8.938l10.833-10.834zM33.938 25L17.27 41.667h24.396a2.083 2.083 0 0 0 2.083-2.084v-4.77z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M29 17.27h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 8.333H8.333c-1.15 0-2.083.933-2.083 2.084v29.166c0 1.15.933 2.084 2.083 2.084h33.334c1.15 0 2.083-.933 2.083-2.084V10.417a2.084 2.084 0 0 0-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqGalleryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGalleryCollectionsIcon],svg[marketeq-gallery-collections-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 41.667h31.25a2.083 2.083 0 0 0 2.083-2.084V16.667"></svg:path><svg:path stroke="#306CFE" d="m23.417 25.354l-7.98 7.98H8.334A2.083 2.083 0 0 1 6.25 31.25V28l9.917-9.917zm5.916-5.917L15.438 33.333h17.895a2.083 2.083 0 0 0 2.084-2.083v-5.708zm-21-11.104h25a2.083 2.083 0 0 1 2.084 2.084V31.25a2.083 2.083 0 0 1-2.084 2.083h-25A2.083 2.083 0 0 1 6.25 31.25V10.417a2.083 2.083 0 0 1 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqGalleryCollectionsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGameConsoleCableIcon],svg[marketeq-game-console-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v8.333m6.25 0h-12.5l1.042 4.167h10.416z"></svg:path><svg:path stroke="#306CFE" d="M34.23 14.583a8.333 8.333 0 0 1 8.333 7.75L43.75 39a4.418 4.418 0 0 1-4.667 4.75a4.67 4.67 0 0 1-4.166-3.792l-1.584-7.062a2.08 2.08 0 0 0-2.083-1.646H18.625a2.084 2.084 0 0 0-2.083 1.646l-1.521 7.062a4.67 4.67 0 0 1-4.167 3.792A4.416 4.416 0 0 1 6.25 39l1.188-16.667a8.334 8.334 0 0 1 8.333-7.75z"></svg:path></svg:g>`,
})
export class MarketeqGameConsoleCableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGasStoveIcon],svg[marketeq-gas-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="m32.792 17.208l2.625-2.625m-3.042 17.792a10.416 10.416 0 1 1-14.713-14.75a10.416 10.416 0 0 1 14.713 14.75m.438.437l2.604 2.605zM17.27 32.73l-2.688 2.688zm-.063-15.52l-2.625-2.626z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 41.667V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqGasStoveIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGearshiftCarIcon],svg[marketeq-gearshift-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 31.25v-12.5M33.333 25H16.667zM25 31.25v-12.5zm8.333 0v-12.5z"></svg:path><svg:path stroke="#306CFE" d="M10.417 43.75h29.166c1.15 0 2.084-.933 2.084-2.083V8.333c0-1.15-.933-2.083-2.084-2.083H10.417a2.084 2.084 0 0 0-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqGearshiftCarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGoalIcon],svg[marketeq-goal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 18.75l-5.208 5.208zm0-6.25v6.25h6.25l6.25-6.25H37.5V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25.688 6.25H25A18.75 18.75 0 1 0 43.75 25v-.687"></svg:path><svg:path stroke="#306CFE" d="M35.208 27.083a10.417 10.417 0 1 1-12.291-12.291"></svg:path></svg:g>`,
})
export class MarketeqGoalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGoldMedalIcon],svg[marketeq-gold-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.708 17.5l-2.875.396l2.084 1.854l-.5 2.646L25 21.146l2.583 1.25l-.5-2.646l2.084-1.854l-2.875-.396L25 15.104z"></svg:path><svg:path stroke="#306CFE" d="M25 31.25c6.904 0 12.5-5.596 12.5-12.5S31.904 6.25 25 6.25s-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5"></svg:path><svg:path stroke="#306CFE" d="M33.917 27.5a12.5 12.5 0 0 1-6.834 3.583l4.167 10.584l3.125-2.605l4.354.438zM11.27 39.583l4.355-.437l3.125 2.52l4.167-10.583a12.5 12.5 0 0 1-6.834-3.583z"></svg:path></svg:g>`,
})
export class MarketeqGoldMedalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGoldMedal6Icon],svg[marketeq-gold-medal-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 27.083a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M12.063 28.27L6.25 36.584l6.313 1.875l3.916 5.292l5.875-8.375m15.584-7.106l5.812 8.313l-6.312 1.875l-3.917 5.292l-5.875-8.375"></svg:path><svg:path stroke="#306CFE" d="M40.167 20.833c0 1.584-1.396 2.917-1.855 4.334c-.458 1.416-.145 3.354-1.041 4.583s-2.813 1.5-3.938 2.417s-2.083 2.625-3.541 3.104c-1.459.479-3.105-.438-4.688-.438s-3.27.896-4.687.438c-1.417-.459-2.313-2.23-3.542-3.104c-1.23-.875-3.146-1.188-4.042-2.417c-.896-1.23-.562-3.125-1.041-4.583c-.48-1.459-1.959-2.75-1.959-4.334s1.396-2.916 1.854-4.333s.146-3.354 1.042-4.583s2.813-1.5 4.042-2.417s1.979-2.625 3.541-3.104c1.563-.48 3.105.437 4.688.437s3.27-.896 4.688-.437C31.104 6.854 32 8.625 33.333 9.5s3.146 1.187 4.042 2.417s.563 3.125 1.042 4.583s1.75 2.75 1.75 4.333"></svg:path></svg:g>`,
})
export class MarketeqGoldMedal6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGpsFixedIcon],svg[marketeq-gps-fixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v4.167zM43.75 25h-4.167zM25 43.75v-4.167zM6.25 25h4.167zm25 0a6.25 6.25 0 1 0-12.5 0a6.25 6.25 0 0 0 12.5 0"></svg:path><svg:path stroke="#306CFE" d="M25 39.583c8.054 0 14.583-6.529 14.583-14.583S33.054 10.417 25 10.417S10.417 16.946 10.417 25S16.946 39.583 25 39.583"></svg:path></svg:g>`,
})
export class MarketeqGpsFixedIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGravityIcon],svg[marketeq-gravity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 8.333v12.5M25 6.25v12.5zm8.333 2.083v12.5z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75a8.333 8.333 0 1 0 0-16.667a8.333 8.333 0 0 0 0 16.667"></svg:path></svg:g>`,
})
export class MarketeqGravityIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGrillIcon],svg[marketeq-grill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 35.417h25"></svg:path><svg:path stroke="#344054" d="m35.125 23.667l4.458 20.083m-29.166 0l4.458-20.02"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25v4.167a16.667 16.667 0 0 1-33.334 0V6.25z"></svg:path><svg:path stroke="#344054" d="M6.25 6.25h37.5"></svg:path></svg:g>`,
})
export class MarketeqGrillIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqGrillBbqIcon],svg[marketeq-grill-bbq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 25l3.542 10.417M10.417 43.75l4.458-20.083"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25v4.167a16.667 16.667 0 1 1-33.334 0V6.25z"></svg:path><svg:path stroke="#344054" d="M6.25 6.25h37.5"></svg:path><svg:path stroke="#306CFE" d="M37.5 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqGrillBbqIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHammerDrillIcon],svg[marketeq-hammer-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 10.417H8.333M25 31.25v12.5zm8.333-20.833h8.334z"></svg:path><svg:path stroke="#306CFE" d="M31.25 22.917h-12.5a2.083 2.083 0 0 1-2.083-2.084v-12.5A2.083 2.083 0 0 1 18.75 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083v12.5a2.083 2.083 0 0 1-2.083 2.084m-2.083 0h-8.334v6.25a2.083 2.083 0 0 0 2.084 2.083h4.166a2.083 2.083 0 0 0 2.084-2.083z"></svg:path></svg:g>`,
})
export class MarketeqHammerDrillIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHandphoneIcon],svg[marketeq-handphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 35.417h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M29.167 6.25h-8.334l1.042 4.167h6.25z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 6.25H14.583c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqHandphoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHandphoneLaptopIcon],svg[marketeq-handphone-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 6.25H10.417a2.083 2.083 0 0 0-2.084 2.083V18.75h14.584A2.083 2.083 0 0 1 25 20.833V31.25h16.667V8.333a2.083 2.083 0 0 0-2.084-2.083M25 31.25v4.167h16.667a2.083 2.083 0 0 0 2.083-2.084V31.25z"></svg:path><svg:path stroke="#344054" d="M6.25 41.667V20.833a2.083 2.083 0 0 1 2.083-2.083h14.584A2.083 2.083 0 0 1 25 20.833v20.834a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083m7.292-18.75h4.166l1.042-4.167H12.5z"></svg:path></svg:g>`,
})
export class MarketeqHandphoneLaptopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHandphoneLockIcon],svg[marketeq-handphone-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 43.75h12.5a2.083 2.083 0 0 0 2.084-2.083v-8.334a2.083 2.083 0 0 0-2.084-2.083h-12.5A2.083 2.083 0 0 0 25 33.333v8.334a2.083 2.083 0 0 0 2.083 2.083m2.084-16.667v4.167H37.5v-4.167a4.167 4.167 0 0 0-4.167-4.166v0a4.167 4.167 0 0 0-4.166 4.166"></svg:path><svg:path stroke="#306CFE" d="M16.667 43.75h-6.25a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083H31.25a2.083 2.083 0 0 1 2.083 2.083v6.25"></svg:path><svg:path stroke="#306CFE" d="M17.708 10.417h6.25L25 6.25h-8.333z"></svg:path></svg:g>`,
})
export class MarketeqHandphoneLockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHastagIcon],svg[marketeq-hastag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 31.25h31.25m-29.166-12.5h31.25z"></svg:path><svg:path stroke="#306CFE" d="m13.5 43.75l10.063-37.5m12.937 0l-10.062 37.5z"></svg:path></svg:g>`,
})
export class MarketeqHastagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHastagCircleIcon],svg[marketeq-hastag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.48 14.583l-5.022 18.75m-1.791-12.5h18.75zm-2.084 8.334h18.75zm11.938 6.25l5.02-18.75z"></svg:path><svg:path stroke="#306CFE" d="M6.25 25A18.75 18.75 0 0 1 25 6.25v0A18.75 18.75 0 0 1 43.75 25v0A18.75 18.75 0 0 1 25 43.75v0A18.75 18.75 0 0 1 6.25 25"></svg:path></svg:g>`,
})
export class MarketeqHastagCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHastagSquareIcon],svg[marketeq-hastag-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.48 14.583l-5.584 20.834m-1.23-14.584h18.75zm-2.083 8.334h18.75zm17.521-14.584l-5.583 20.834z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqHastagSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHeadsetAltIcon],svg[marketeq-headset-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 29.167L7.938 25A17.146 17.146 0 0 1 25 6.25v0A17.146 17.146 0 0 1 42.063 25l-.396 4.167m-6.25 6.25V37.5a3.94 3.94 0 0 1-3.646 4.167H25"></svg:path><svg:path stroke="#306CFE" d="M8.333 29.167v-2.084a6.25 6.25 0 0 1 6.25-6.25h2.084a2.083 2.083 0 0 1 2.083 2.084v10.416a2.083 2.083 0 0 1-2.083 2.084h-2.084a6.25 6.25 0 0 1-6.25-6.25m33.334 0v-2.084a6.25 6.25 0 0 0-6.25-6.25h-2.084a2.083 2.083 0 0 0-2.083 2.084v10.416a2.083 2.083 0 0 0 2.083 2.084h2.084a6.25 6.25 0 0 0 6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqHeadsetAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHelicopterIcon],svg[marketeq-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 6.25h25zm2.083 37.5H43.75zM25 6.25v8.333zm8.333 29.167H25v8.333h8.333z"></svg:path><svg:path stroke="#306CFE" d="M25 14.583V25a2.083 2.083 0 0 0 2.083 2.083h16.521"></svg:path><svg:path stroke="#306CFE" d="M6.25 16.667v4.166a2.083 2.083 0 0 0 2.083 2.084h4.75a2.084 2.084 0 0 1 2.084 1.416l1.791 5.375a8.33 8.33 0 0 0 7.792 5.709h16.917a2.083 2.083 0 0 0 2.083-2.084v-6.25l-3.937-7.896a8.33 8.33 0 0 0-7.459-4.604H8.334a2.083 2.083 0 0 0-2.084 2.084"></svg:path></svg:g>`,
})
export class MarketeqHelicopterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHelpIcon],svg[marketeq-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m30.02 7.458l-2.582 9m-7.458-9l2.582 9m19.98 13.562l-9-2.582m9-7.458l-9 2.582M19.98 42.542l2.582-9m7.458 9l-2.582-9M7.458 19.98l9 2.582m-9 7.458l9-2.582"></svg:path><svg:path stroke="#306CFE" d="M43.75 25a18.75 18.75 0 1 1-37.5 0a18.75 18.75 0 0 1 37.5 0M25 16.667a8.333 8.333 0 1 0 0 16.665a8.333 8.333 0 0 0 0-16.665"></svg:path></svg:g>`,
})
export class MarketeqHelpIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHome3Icon],svg[marketeq-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 10.417H14.583l8.334 8.333v20.833H43.75V19.604a2.08 2.08 0 0 0-.604-1.458z"></svg:path><svg:path stroke="#344054" d="M6.25 39.583V19.604c.002-.546.22-1.07.604-1.458l7.73-7.73l8.333 8.334v20.833z"></svg:path></svg:g>`,
})
export class MarketeqHome3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHomeAlt2Icon],svg[marketeq-home-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.583 20.833V43.75H29.167V29.167h-8.334V43.75H10.417V20.833L25 6.25z"></svg:path>`,
})
export class MarketeqHomeAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHomeAlt3Icon],svg[marketeq-home-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 20.833v21.459a1.604 1.604 0 0 1-1.729 1.458h-8.062V29.375h-9.584V43.75h-8.062a1.605 1.605 0 0 1-1.73-1.458V20.833"></svg:path><svg:path stroke="#344054" d="M43.75 25L25 6.25L6.25 25"></svg:path></svg:g>`,
})
export class MarketeqHomeAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHomeTelephoneIcon],svg[marketeq-home-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h14.584a2.083 2.083 0 0 0 2.083-2.083V37.5M22.917 16.667h-8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 33.333V10.417a2.083 2.083 0 0 1 2.083-2.084H31.25v27.084H8.333a2.083 2.083 0 0 1-2.083-2.084M33.333 37.5h8.334a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334a2.083 2.083 0 0 0-2.083 2.083v27.084a2.083 2.083 0 0 0 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqHomeTelephoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqHotel2Icon],svg[marketeq-hotel-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25h-8.333v12.5H25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 43.75H6.25m27.083 0h-25V16.083A2.08 2.08 0 0 1 9.75 14l23.583-7.75zm8.334-22.917a2.083 2.083 0 0 0-2.084-2.083h-6.25v25h8.334z"></svg:path></svg:g>`,
})
export class MarketeqHotel2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqIdCardIcon],svg[marketeq-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 18.75a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334m6.25 14.583a6.25 6.25 0 0 0-12.5 0v2.084h12.5z"></svg:path><svg:path stroke="#306CFE" d="M32.292 6.25h-4.167l-2.083 4.167h4.166zm-12.5 4.167h4.166L21.875 6.25h-4.167zm-7.292 0h25a2.083 2.083 0 0 1 2.083 2.083v29.167A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V12.5a2.083 2.083 0 0 1 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqIdCardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqImportLeft2Icon],svg[marketeq-import-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 27.083h-12.5v-12.5M43.75 6.25L22.917 27.083"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h14.584"></svg:path></svg:g>`,
})
export class MarketeqImportLeft2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqInfiniteIcon],svg[marketeq-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.48 30.5a7.79 7.79 0 0 1-10.98 0L25 25l5.5-5.5a7.77 7.77 0 0 1 10.98 11m-32.96 0a7.79 7.79 0 0 0 10.98 0L25 25l-5.5-5.5a7.77 7.77 0 1 0-10.98 11"></svg:path>`,
})
export class MarketeqInfiniteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqInfinite2Icon],svg[marketeq-infinite-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.917 30.875A7.77 7.77 0 1 0 30.5 19.5l-11 11a7.77 7.77 0 1 1-.417-11.375"></svg:path>`,
})
export class MarketeqInfinite2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqInformationChatRightIcon],svg[marketeq-information-chat-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 16.667h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 33.333v-6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.5 28.063a18.75 18.75 0 0 0 27.083 13.583l7.063 1.458a2.083 2.083 0 0 0 2.458-2.458l-1.437-7.084a18.75 18.75 0 1 0-35.167-5.5"></svg:path></svg:g>`,
})
export class MarketeqInformationChatRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqInformationSquareIcon],svg[marketeq-information-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 16.667h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 27.083v6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqInformationSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqIntegralIcon],svg[marketeq-integral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.417 39.583l.791 1.584a4.668 4.668 0 0 0 8.605-.605L25 25l5.188-15.562a4.67 4.67 0 0 1 4.437-3.188v0a4.67 4.67 0 0 1 4.167 2.583l.791 1.584"></svg:path>`,
})
export class MarketeqIntegralIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqInvoiceDollarDoneLeftIcon],svg[marketeq-invoice-dollar-done-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 21.875l-3.979 5.208l-2.27-2.604m-10.417-9.896h-5.209a3.125 3.125 0 1 0 0 6.25h2.084a3.125 3.125 0 1 1 0 6.25H8.333m4.167 2.084v-2.084m8.333 8.334h12.5zM12.5 14.583V12.5z"></svg:path><svg:path stroke="#306CFE" d="M12.5 37.5v4.167a2.083 2.083 0 0 0 2.083 2.083h25a2.083 2.083 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083H18.75"></svg:path></svg:g>`,
})
export class MarketeqInvoiceDollarDoneLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqIronIcon],svg[marketeq-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 35.417v6.25a2.083 2.083 0 0 1-2.084 2.083H16.667a2.083 2.083 0 0 1-2.084-2.083v-6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 4.167A28.08 28.08 0 0 1 37.5 27.52v7.896h-25V27.52A28.08 28.08 0 0 1 25 4.167"></svg:path></svg:g>`,
})
export class MarketeqIronIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqJetPlaneRightIcon],svg[marketeq-jet-plane-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m24.333 35.27l8.48 8.48l3.729-3.73a2.08 2.08 0 0 0 .604-1.666l-1.354-14.812M19.52 9.813l-2.853 2.958m20.562 20.562l2.959-2.937zM26.563 14.208l-14.917-1.354a2.08 2.08 0 0 0-1.667.604l-3.729 3.73l8.52 8.52"></svg:path><svg:path stroke="#306CFE" d="M19.52 36.375a2.08 2.08 0 0 0 2.96 0l16.478-16.48A16.38 16.38 0 0 0 43.75 8.334a2.083 2.083 0 0 0-2.083-2.083a16.38 16.38 0 0 0-11.563 4.792L13.625 27.52a2.08 2.08 0 0 0 0 2.958z"></svg:path></svg:g>`,
})
export class MarketeqJetPlaneRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqJetskiIcon],svg[marketeq-jetski-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 10.417h2.833a2.08 2.08 0 0 1 1.896 1.229l3.23 7.104"></svg:path><svg:path stroke="#306CFE" d="M27.083 39.583h-15.5a4.17 4.17 0 0 1-4.041-3.146L6.25 31.25h37.5a20.83 20.83 0 0 1-16.667 8.333m4.167-25a20.84 20.84 0 0 1-16.667 8.334h-6.25A2.083 2.083 0 0 0 6.25 25v6.25h37.5c0-12.5-12.5-16.667-12.5-16.667"></svg:path></svg:g>`,
})
export class MarketeqJetskiIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqJewelryIcon],svg[marketeq-jewelry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.354 16.667a14.584 14.584 0 1 1-14.708 0"></svg:path><svg:path stroke="#306CFE" d="M27.604 22.917h-5.208L14.583 12.5l5.209-6.25h10.416l5.209 6.25z"></svg:path></svg:g>`,
})
export class MarketeqJewelryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqJobIcon],svg[marketeq-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 22.917v4.166m2.083-12.5H16.667v-6.25A2.083 2.083 0 0 1 18.75 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083zm2.084 8.334H14.583z"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667v-25a2.084 2.084 0 0 0-2.083-2.084H8.333c-1.15 0-2.083.933-2.083 2.084v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqJobIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqJoystickIcon],svg[marketeq-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583V31.25zm4.167 18.75a2.083 2.083 0 0 0-2.084-2.083h-4.166a2.083 2.083 0 0 0-2.084 2.083v2.084h8.334z"></svg:path><svg:path stroke="#306CFE" d="M39.583 43.75H10.417V37.5a2.083 2.083 0 0 1 2.083-2.083h25a2.083 2.083 0 0 1 2.083 2.083zM25 6.25a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333"></svg:path></svg:g>`,
})
export class MarketeqJoystickIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKaraokeIcon],svg[marketeq-karaoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 39.583H43.75M29.167 31.25H43.75zm4.166-8.333H43.75z"></svg:path><svg:path stroke="#306CFE" d="M22.917 20.833H6.25m13.833 0l-1.208 20.959a2.083 2.083 0 0 1-2.083 1.958h-4.417a2.083 2.083 0 0 1-2.083-1.958L9.083 20.833zm-5.5-14.583a8.333 8.333 0 0 0-5.458 14.583h10.917A8.333 8.333 0 0 0 14.583 6.25"></svg:path></svg:g>`,
})
export class MarketeqKaraokeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKey11Icon],svg[marketeq-key-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333h4.167M25 18.75v25zm0 22.917h4.167z"></svg:path><svg:path stroke="#306CFE" d="M25 6.25a4.167 4.167 0 1 1 0 8.333a4.167 4.167 0 0 1 0-8.333m-8.333 12.5a4.166 4.166 0 1 0 8.332 0a4.166 4.166 0 0 0-8.332 0m12.5-4.167a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqKey11Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKey7Icon],svg[marketeq-key-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333h4.167M25 18.75v25zm0 22.917h4.167z"></svg:path><svg:path stroke="#306CFE" d="M25 18.75a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class MarketeqKey7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKeyLockCircleIcon],svg[marketeq-key-lock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 22.917a6.25 6.25 0 1 0-9.417 5.395l-.5 2.521a2.084 2.084 0 0 0 2.084 2.5h3.25a2.084 2.084 0 0 0 2.083-2.5l-.5-2.52a6.25 6.25 0 0 0 3-5.396"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqKeyLockCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKeyboard3Icon],svg[marketeq-keyboard-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M15.52 27.083h.21m18.75 0h-.21m-9.374 0h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M18.75 35.417h12.5"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 6.25v8.333m2.083 0h-4.166v4.167h4.166zM41.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V20.833a2.083 2.083 0 0 1 2.083-2.083h33.334a2.083 2.083 0 0 1 2.083 2.083v20.834a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqKeyboard3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKitchenCabinet2Icon],svg[marketeq-kitchen-cabinet-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 27.083h-4.166"></svg:path><svg:path stroke="#306CFE" d="M29.167 10.417H8.333v8.333h20.834zm12.5 0H8.333v29.166h33.334zm-35.417 0h37.5zm35.417 0h-12.5v29.166h12.5z"></svg:path></svg:g>`,
})
export class MarketeqKitchenCabinet2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqKnifeIcon],svg[marketeq-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m21.69 31.264l-5.893-5.892l-9.56 9.56l5.892 5.893z"></svg:path><svg:path stroke="#306CFE" d="m34.286 9.805l8.839 8.839a2.083 2.083 0 0 1 0 2.946L29.042 35.673a2.083 2.083 0 0 1-2.947 0L15.783 25.361L31.34 9.805a2.083 2.083 0 0 1 2.946 0"></svg:path></svg:g>`,
})
export class MarketeqKnifeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLaptop2Icon],svg[marketeq-laptop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M10.417 6.25h29.166a2.083 2.083 0 0 1 2.084 2.083v18.75H8.333V8.333a2.083 2.083 0 0 1 2.084-2.083M6.25 35.417h37.5v6.25a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083z"></svg:path><svg:path stroke="#344054" d="M41.667 27.083H8.333L6.25 35.417h37.5z"></svg:path></svg:g>`,
})
export class MarketeqLaptop2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLatternIcon],svg[marketeq-lattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#306CFE" d="M16.667 14.583h16.666A4.167 4.167 0 0 1 37.5 18.75v25h-25v-25a4.167 4.167 0 0 1 4.167-4.167M25 43.75v-8.333"></svg:path><svg:path stroke="#344054" d="M8.333 43.75h33.334m-20.834-12.5A3.895 3.895 0 0 0 25 35.417a3.96 3.96 0 0 0 4.167-4.167c0-2.792-2.084-3.125-2.084-8.333c-4.166 2.083-6.25 5.396-6.25 8.333"></svg:path></svg:g>`,
})
export class MarketeqLatternIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLaunchIcon],svg[marketeq-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 43.75h-8.333l1.687-6.77a4.17 4.17 0 0 1 1.73-2.46L17 32.438m16-.021l3.167 2.083a4.17 4.17 0 0 1 1.729 2.458l1.687 6.792H31.25M25 20.833v6.25"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75h-12.5l-2.562-16.667a20.83 20.83 0 0 1 5.854-17.896l1.479-1.479a2.083 2.083 0 0 1 2.958 0l1.48 1.48a20.83 20.83 0 0 1 5.854 17.895z"></svg:path></svg:g>`,
})
export class MarketeqLaunchIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLaundryBasket2Icon],svg[marketeq-laundry-basket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 16.667v-6.25h-12.5v6.25a2.083 2.083 0 0 0 2.083 2.083h8.334a2.083 2.083 0 0 0 2.083-2.083"></svg:path><svg:path stroke="#306CFE" d="M6.25 10.417h37.5zm33.48 27.229l1.937-27.23H8.333l1.938 27.23a2.083 2.083 0 0 0 2.083 1.937h25.292a2.084 2.084 0 0 0 2.083-1.937"></svg:path></svg:g>`,
})
export class MarketeqLaundryBasket2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLawnMowerIcon],svg[marketeq-lawn-mower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 22.917h11.208a2.08 2.08 0 0 1 1.875 1.145l1.5 3.021H37.5a2.083 2.083 0 0 1 2.083 2.084v4.166"></svg:path><svg:path stroke="#306CFE" d="M6.25 8.333h2.354a2.08 2.08 0 0 1 2.084 1.792L14 33.333M35.417 37.5H18.75"></svg:path><svg:path stroke="#344054" d="M14.583 33.333a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333m25 0a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333"></svg:path></svg:g>`,
})
export class MarketeqLawnMowerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLcdIcon],svg[marketeq-lcd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 33.333v7.459a55.6 55.6 0 0 1 8.334 0v-7.459z"></svg:path><svg:path stroke="#306CFE" d="M39.583 42.708a52.2 52.2 0 0 0-29.166 0M43.75 31.25V10.417c0-1.15-.933-2.084-2.083-2.084H8.333c-1.15 0-2.083.933-2.083 2.084V31.25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqLcdIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftAltCircleIcon],svg[marketeq-left-alt-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 19.604v1.23h8.333a2.083 2.083 0 0 1 2.084 2.083v4.166a2.083 2.083 0 0 1-2.084 2.084H25v1.229a2.083 2.083 0 0 1-3.562 1.458l-5.375-5.375a2.085 2.085 0 0 1 0-2.958l5.375-5.375A2.084 2.084 0 0 1 25 19.604"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqLeftAltCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftCircleIcon],svg[marketeq-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 18.75L20.833 25l6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqLeftCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftDirectionIcon],svg[marketeq-left-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.125 29.167h21.542a2.083 2.083 0 0 0 2.083-2.084v-4.166a2.084 2.084 0 0 0-2.083-2.084H20.125"></svg:path><svg:path stroke="#306CFE" d="m20.125 20.833l6.083-7.083l-6.333-5.417L6.75 23.646a2.08 2.08 0 0 0 0 2.708l13.125 15.313l6.25-5.417l-6-7.083"></svg:path></svg:g>`,
})
export class MarketeqLeftDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftDirectionSquareIcon],svg[marketeq-left-direction-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 20.833h10.417v8.334H25v4.166l-9.604-6.625a2.084 2.084 0 0 1 0-3.416L25 16.667z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqLeftDirectionSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftRightArrowIcon],svg[marketeq-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 16.667h33.334m-27.084-6.25l-6.25 6.25l6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="m35.417 39.583l6.25-6.25l-6.25-6.25m6.25 6.25H8.333"></svg:path></svg:g>`,
})
export class MarketeqLeftRightArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftRightScrollBarIcon],svg[marketeq-left-right-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 12.5v25m37.5-25v25z"></svg:path><svg:path stroke="#306CFE" d="M31.25 20.833L35.417 25l-4.167 4.167m-12.5 0L14.583 25l4.167-4.167M35.417 25H14.583"></svg:path></svg:g>`,
})
export class MarketeqLeftRightScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftSignIcon],svg[marketeq-left-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 43.75L29.167 25L39.583 6.25"></svg:path><svg:path stroke="#306CFE" d="M39.583 6.25h-18.75L10.417 25l10.416 18.75h18.75"></svg:path></svg:g>`,
})
export class MarketeqLeftSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftSquare3Icon],svg[marketeq-left-square-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 25H31.25m-8.333-4.167L18.75 25l4.167 4.167"></svg:path><svg:path stroke="#306CFE" d="m23.513 6.866l-16.66 16.66a2.083 2.083 0 0 0 0 2.947l16.66 16.661a2.083 2.083 0 0 0 2.946 0l16.662-16.66a2.083 2.083 0 0 0 0-2.947L26.459 6.866a2.083 2.083 0 0 0-2.946 0"></svg:path></svg:g>`,
})
export class MarketeqLeftSquare3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLighthouseIcon],svg[marketeq-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 14.583h-12.5v8.334h12.5zm0 8.334h-12.5L16.667 43.75h16.666z"></svg:path><svg:path stroke="#344054" d="M12.5 43.75h25m-4.167-29.167H16.667L25 6.25z"></svg:path></svg:g>`,
})
export class MarketeqLighthouseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLinkAltIcon],svg[marketeq-link-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M9.375 40.625a7.375 7.375 0 0 1 0-10.417L14.583 25A7.375 7.375 0 0 1 25 25a7.375 7.375 0 0 1 0 10.417l-5.208 5.208a7.375 7.375 0 0 1-10.417 0m27.083-16.667l5.209-5.208a7.375 7.375 0 0 0 0-10.417v0a7.375 7.375 0 0 0-10.417 0l-5.208 5.209a7.375 7.375 0 0 0 0 10.416v0a7.375 7.375 0 0 0 10.416 0"></svg:path><svg:path stroke="#344054" d="m20.833 29.167l8.334-8.334"></svg:path></svg:g>`,
})
export class MarketeqLinkAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLinkAlt2Icon],svg[marketeq-link-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M30.208 19.792a7.375 7.375 0 0 1 0 10.416L19.792 40.625a7.375 7.375 0 0 1-10.417 0a7.375 7.375 0 0 1 0-10.417"></svg:path><svg:path stroke="#306CFE" d="M40.625 19.792a7.375 7.375 0 0 0 0-10.417a7.375 7.375 0 0 0-10.417 0L19.792 19.792a7.375 7.375 0 0 0 0 10.416v0"></svg:path></svg:g>`,
})
export class MarketeqLinkAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLockIcon],svg[marketeq-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417v-2.084m3.125-3.125a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0"></svg:path><svg:path stroke="#306CFE" d="M39.583 41.667V20.833c0-1.15-.932-2.083-2.083-2.083h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083m-6.25-22.917v-4.167a8.333 8.333 0 1 0-16.666 0v4.167"></svg:path></svg:g>`,
})
export class MarketeqLockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLock1Icon],svg[marketeq-lock-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 18.75v-4.167a8.333 8.333 0 0 0-16.666 0v4.167"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.932-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqLock1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLockCheckIcon],svg[marketeq-lock-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 31.25l4.167 4.167l8.333-8.334"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75h-25c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.932 2.083 2.083 2.083h25c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.932-2.083-2.083-2.083m-4.167 0v-4.167a8.333 8.333 0 1 0-16.666 0v4.167"></svg:path></svg:g>`,
})
export class MarketeqLockCheckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLockCircleIcon],svg[marketeq-lock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 33.333h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c5.753 0 10.417-4.664 10.417-10.417S30.753 22.917 25 22.917S14.583 27.58 14.583 33.333S19.247 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M16.667 27.083v-12.5a8.333 8.333 0 1 1 16.666 0v12.5"></svg:path></svg:g>`,
})
export class MarketeqLockCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLogInIcon],svg[marketeq-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 8.333h6.25a2.083 2.083 0 0 1 2.083 2.084v29.166a2.083 2.083 0 0 1-2.083 2.084h-6.25"></svg:path><svg:path stroke="#306CFE" d="m22 38.23l-3.25-2.71a2.085 2.085 0 0 1-.23-2.937l3.022-3.416H6.25v-8.334h15.292l-2.938-3.416a2.083 2.083 0 0 1 .146-2.834l3.167-2.708A2.084 2.084 0 0 1 25 12l9.98 11.646a2.084 2.084 0 0 1 0 2.708L25 38a2.083 2.083 0 0 1-3 .23"></svg:path></svg:g>`,
})
export class MarketeqLogInIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLogInDoubleArrow2Icon],svg[marketeq-log-in-double-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m29.167 18.75l6.25 6.25l-6.25 6.25M18.75 18.75L25 25l-6.25 6.25M25 25H6.25"></svg:path><svg:path stroke="#306CFE" d="M35.417 41.667h6.25a2.083 2.083 0 0 0 2.083-2.084V10.417a2.083 2.083 0 0 0-2.083-2.084h-6.25"></svg:path></svg:g>`,
})
export class MarketeqLogInDoubleArrow2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqLovePlaylist2Icon],svg[marketeq-love-playlist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 31.25H43.75zm0 8.333H43.75zm10.666-30.75l-.25.23l-.25-.23a1.686 1.686 0 0 0-2.395 0v0a1.71 1.71 0 0 0 0 2.417l.687.708l1.958 1.959l1.917-1.938l.688-.687a1.73 1.73 0 0 0 0-2.438a1.687 1.687 0 0 0-2.355-.02"></svg:path><svg:path stroke="#306CFE" d="M20.833 36.458V6.25zm-7.291-7.291a7.292 7.292 0 1 0 0 14.583a7.292 7.292 0 0 0 0-14.583"></svg:path></svg:g>`,
})
export class MarketeqLovePlaylist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMapIcon],svg[marketeq-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 20.833V43.75m6.458-37.5l8.334 14.583zM43.75 20.833H6.25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMapIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMapPinIcon],svg[marketeq-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.188 37.5c.099.31.148.633.145.958c0 2.917-3.729 5.292-8.333 5.292s-8.333-2.375-8.333-5.292a3 3 0 0 1 .145-.958"></svg:path><svg:path stroke="#306CFE" d="M25 18.75v16.667M18.75 12.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0"></svg:path></svg:g>`,
})
export class MarketeqMapPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMapsIcon],svg[marketeq-maps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m31.25 12.5l-12.5-4.167L6.25 12.5v29.167l12.5-4.167l12.5 4.167l12.5-4.167V8.333z"></svg:path><svg:path stroke="#344054" d="M31.25 41.667L18.75 37.5V8.333l12.5 4.167z"></svg:path></svg:g>`,
})
export class MarketeqMapsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMapsLocationIcon],svg[marketeq-maps-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.333 18.75h4.855a2.08 2.08 0 0 1 2.083 1.75l3.479 20.833a2.082 2.082 0 0 1-2.083 2.417H8.333a2.082 2.082 0 0 1-2.083-2.417L9.73 20.5a2.08 2.08 0 0 1 2.082-1.75h4.855"></svg:path><svg:path stroke="#344054" d="M33.333 14.583a8.333 8.333 0 0 0-16.666 0C16.667 22.917 25 31.25 25 31.25s8.333-8.333 8.333-16.667"></svg:path></svg:g>`,
})
export class MarketeqMapsLocationIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMapsPinIcon],svg[marketeq-maps-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 43.75h12.5"></svg:path><svg:path stroke="#306CFE" d="M18.75 12.5A6.25 6.25 0 0 1 25 6.25v0a6.25 6.25 0 1 1-6.25 6.25M25 18.75v16.667z"></svg:path></svg:g>`,
})
export class MarketeqMapsPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMarshmallowIcon],svg[marketeq-marshmallow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m25 37.5l4.167-2.083m-4.167-25V6.25zm0 16.666V43.75z"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417h8.334A2.083 2.083 0 0 1 31.25 12.5v4.167a2.083 2.083 0 0 1-2.083 2.083h-8.334a2.083 2.083 0 0 1-2.083-2.083V12.5a2.083 2.083 0 0 1 2.083-2.083m0 8.333h8.334a2.083 2.083 0 0 1 2.083 2.083V25a2.083 2.083 0 0 1-2.083 2.083h-8.334A2.083 2.083 0 0 1 18.75 25v-4.167a2.083 2.083 0 0 1 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMarshmallowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMarshmallowRightIcon],svg[marketeq-marshmallow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m15.396 28.708l1.479 4.417M41.063 8.938l-2.959 2.958zM8.333 41.667l18-18z"></svg:path><svg:path stroke="#306CFE" d="m35.167 8.938l5.895 5.895a2.08 2.08 0 0 1 0 2.959l-2.958 3.041a2.084 2.084 0 0 1-2.937 0l-5.896-6a2.084 2.084 0 0 1 0-2.937l2.937-2.958a2.083 2.083 0 0 1 2.959 0m-5.896 5.895l5.896 6a2.083 2.083 0 0 1 0 2.938l-2.959 2.958a2.083 2.083 0 0 1-2.937 0l-5.896-5.896a2.084 2.084 0 0 1 0-2.937l2.958-2.959a2.084 2.084 0 0 1 2.938-.104"></svg:path></svg:g>`,
})
export class MarketeqMarshmallowRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMaximize2Icon],svg[marketeq-maximize-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m20.833 29.167l-12.5 12.5m20.834-20.834l12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M33.333 8.333h8.334v8.334m-25 25H8.333v-8.334"></svg:path></svg:g>`,
})
export class MarketeqMaximize2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMeasuringTapeIcon],svg[marketeq-measuring-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 29.167h-6.25V37.5h6.25a2.083 2.083 0 0 0 2.083-2.083V31.25a2.083 2.083 0 0 0-2.083-2.083M20.833 31.25a6.25 6.25 0 1 1 0-12.5a6.25 6.25 0 0 1 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417A14.583 14.583 0 0 1 35.417 25v12.5a2.083 2.083 0 0 1-2.084 2.083h-12.5A14.583 14.583 0 0 1 6.25 25v0a14.583 14.583 0 0 1 14.583-14.583"></svg:path></svg:g>`,
})
export class MarketeqMeasuringTapeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMenuIcon],svg[marketeq-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25h37.5"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h25m-12.5 25h25z"></svg:path></svg:g>`,
})
export class MarketeqMenuIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMenuAltIcon],svg[marketeq-menu-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25h37.5"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h37.5m-37.5 25h37.5z"></svg:path></svg:g>`,
})
export class MarketeqMenuAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicIcon],svg[marketeq-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38 33.333a16.668 16.668 0 0 1-26 0m13 6.25v4.167"></svg:path><svg:path stroke="#306CFE" d="M25 31.25a8.334 8.334 0 0 1-8.333-8.333v-8.334A8.333 8.333 0 0 1 25 6.25v0a8.333 8.333 0 0 1 8.333 8.333v8.334A8.333 8.333 0 0 1 25 31.25"></svg:path></svg:g>`,
})
export class MarketeqMicIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneIcon],svg[marketeq-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.25 43.75h-12.5M25 35.417a8.333 8.333 0 0 1-8.333-8.334v-12.5A8.333 8.333 0 0 1 25 6.25v0a8.333 8.333 0 0 1 8.333 8.333v12.5A8.333 8.333 0 0 1 25 35.417m0 0v8.333z"></svg:path>`,
})
export class MarketeqMicrophoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneAudioIcon],svg[marketeq-microphone-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m30.5 20.833l-1.208 20.959a2.083 2.083 0 0 1-2.084 1.958h-4.416a2.083 2.083 0 0 1-2.084-1.958L19.5 20.833zM25 6.25a8.334 8.334 0 0 0-5.458 14.583h10.916A8.334 8.334 0 0 0 25 6.25"></svg:path><svg:path stroke="#344054" d="M33.333 20.833H16.667"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneAudioIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneDisableIcon],svg[marketeq-microphone-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 43.75h-12.5M25 35.417a8.334 8.334 0 0 1-8.333-8.334v-12.5A8.333 8.333 0 0 1 25 6.25v0a8.333 8.333 0 0 1 8.333 8.333v12.5A8.333 8.333 0 0 1 25 35.417m0 0v8.333z"></svg:path><svg:path stroke="#344054" d="m8.333 8.333l33.334 33.334"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneMusic2Icon],svg[marketeq-microphone-music-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 25a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#344054" d="M39.583 14.583a6.04 6.04 0 0 0-6.25-6.25v12.5"></svg:path><svg:path stroke="#306CFE" d="M26.354 33.333a8.33 8.33 0 0 1-7.291 1.896a9.02 9.02 0 0 1-6.563-8.458V14.938a8.604 8.604 0 0 1 6.604-8.521A8.33 8.33 0 0 1 25 7.375m4.167 36.375H12.5m8.333-8.333v8.333z"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneMusic2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneRightIcon],svg[marketeq-microphone-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m6.25 43.75l8.542-8.542"></svg:path><svg:path stroke="#306CFE" d="M34.896 22.917L19.208 36.875a2.083 2.083 0 0 1-2.854 0L13.23 33.75a2.083 2.083 0 0 1 0-2.854l13.854-15.792zm6.416-14.209a8.33 8.33 0 0 0-11.791 0a8.34 8.34 0 0 0-2.438 6.438l7.709 7.708a8.33 8.33 0 0 0 6.458-2.375a8.334 8.334 0 0 0 .063-11.792z"></svg:path><svg:path stroke="#344054" d="M36.896 24.896L25.104 13.104"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneStandIcon],svg[marketeq-microphone-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 43.75h-8.334M25 27.083V43.75z"></svg:path><svg:path stroke="#306CFE" d="M31.833 22.188L13.792 32.875A2.083 2.083 0 0 1 11 32.25l-2.48-3.646A2.083 2.083 0 0 1 9 25.792l16.667-12.75zm8.563-12.271a8.333 8.333 0 0 0-11.563-2.25a8.33 8.33 0 0 0-3.416 4.979l6.833 10.146a8.33 8.33 0 0 0 5.896-1.292a8.333 8.333 0 0 0 2.25-11.583"></svg:path><svg:path stroke="#344054" d="m24.104 10.708l9.313 13.813"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneStandIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMinimizeIcon],svg[marketeq-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m41.667 8.333l-12.5 12.5M8.333 41.667l12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M12.5 29.167h8.333V37.5M37.5 20.833h-8.333V12.5"></svg:path></svg:g>`,
})
export class MarketeqMinimizeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMinimizeLeftIcon],svg[marketeq-minimize-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m8.333 8.333l12.5 12.5m20.834 20.834l-12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M29.167 37.5v-8.333H37.5M20.833 12.5v8.333H12.5"></svg:path></svg:g>`,
})
export class MarketeqMinimizeLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMinimizeSizeIcon],svg[marketeq-minimize-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 6.25L31.854 18.146M18.146 31.854L6.25 43.75zm0-13.708L6.25 6.25zM43.75 43.75L31.854 31.854z"></svg:path><svg:path stroke="#306CFE" d="M8.333 31.25h8.334a2.083 2.083 0 0 1 2.083 2.083v8.334m0-33.334v8.334a2.083 2.083 0 0 1-2.083 2.083H8.333M31.25 41.667v-8.334a2.083 2.083 0 0 1 2.083-2.083h8.334m0-12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333"></svg:path></svg:g>`,
})
export class MarketeqMinimizeSizeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMinusIcon],svg[marketeq-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.583 25H10.417"></svg:path>`,
})
export class MarketeqMinusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMinusCollectionIcon],svg[marketeq-minus-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 20.833h12.5"></svg:path><svg:path stroke="#306CFE" d="M14.583 43.75h27.084a2.083 2.083 0 0 0 2.083-2.083v-31.25"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25h-25c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h25c1.15 0 2.084-.933 2.084-2.084v-25c0-1.15-.933-2.083-2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqMinusCollectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMobileDataCircleIcon],svg[marketeq-mobile-data-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 27.083l4.167 4.167l4.167-4.167m12.5-6.25l-4.167-4.166l-4.167 4.166M31.25 31.25V16.667m-12.5 0V31.25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqMobileDataCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMobileHotspotIcon],svg[marketeq-mobile-hotspot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M18.75 43.75h12.5M25 27.083V43.75z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M11.75 38.25a18.75 18.75 0 1 1 26.5 0"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M32.375 32.375a10.416 10.416 0 1 0-14.75 0"></svg:path></svg:g>`,
})
export class MarketeqMobileHotspotIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMobilePaymentDollarIcon],svg[marketeq-mobile-payment-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 22.917h-5.208a3.125 3.125 0 0 0-3.125 3.125v0a3.125 3.125 0 0 0 3.125 3.125h2.083a3.125 3.125 0 0 1 3.125 3.125v0a3.125 3.125 0 0 1-3.125 3.125H31.25m4.167 2.083v-2.083m0-12.5v-2.084z"></svg:path><svg:path stroke="#306CFE" d="M29.167 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h20.833a2.083 2.083 0 0 1 2.084 2.083V12.5"></svg:path><svg:path stroke="#306CFE" d="M27.083 6.25H18.75l1.042 4.167h6.25z"></svg:path></svg:g>`,
})
export class MarketeqMobilePaymentDollarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMobilePaymentDone2Icon],svg[marketeq-mobile-payment-done-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 22.917h12.5M8.333 14.583H18.75v20.834H8.333a2.083 2.083 0 0 1-2.083-2.084V16.667a2.084 2.084 0 0 1 2.083-2.084M27.083 25l2.271 2.604l3.98-5.208"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667V8.333a2.083 2.083 0 0 0-2.083-2.083H20.833a2.083 2.083 0 0 0-2.083 2.083v33.334a2.083 2.083 0 0 0 2.083 2.083h20.834a2.083 2.083 0 0 0 2.083-2.083m-15.625-31.25h6.25l1.042-4.167h-8.334z"></svg:path></svg:g>`,
})
export class MarketeqMobilePaymentDone2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyIcon],svg[marketeq-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 12.5a2.083 2.083 0 0 0-2.083-2.083h-6.25a8.333 8.333 0 0 0 8.333 8.333zm-37.5 6.25a8.333 8.333 0 0 0 8.333-8.333h-6.25A2.083 2.083 0 0 0 6.25 12.5zm37.5 12.5a8.334 8.334 0 0 0-8.333 8.333h6.25A2.083 2.083 0 0 0 43.75 37.5zM6.25 37.5a2.083 2.083 0 0 0 2.083 2.083h6.25A8.333 8.333 0 0 0 6.25 31.25zM25 20.833a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMoneyIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoney3Icon],svg[marketeq-money-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M20.73 20.833h.207"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 18.75V37.5a2.083 2.083 0 0 1-2.083 2.083h-31.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M8.333 31.25h25c1.15 0 2.084-.933 2.084-2.083V12.5c0-1.15-.933-2.083-2.084-2.083h-25c-1.15 0-2.083.932-2.083 2.083v16.667c0 1.15.933 2.083 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqMoney3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyAltIcon],svg[marketeq-money-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M20.73 20.833h.207"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 10.417h-25c-1.15 0-2.083.933-2.083 2.083v16.667c0 1.15.933 2.083 2.083 2.083h25c1.15 0 2.084-.933 2.084-2.083V12.5c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 18.75h6.25a2.083 2.083 0 0 1 2.083 2.083V37.5a2.083 2.083 0 0 1-2.083 2.083h-25a2.083 2.083 0 0 1-2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqMoneyAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyAlt1Icon],svg[marketeq-money-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 14.583h-5.209a3.125 3.125 0 0 0-3.125 3.125v0a3.125 3.125 0 0 0 3.125 3.125h2.084a3.125 3.125 0 0 1 3.125 3.125v0a3.125 3.125 0 0 1-3.125 3.125h-5.209m4.167 0v2.084M25 12.5v2.083z"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75h25m4.167-37.5H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h33.334c1.15 0 2.083-.933 2.083-2.084v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMoneyAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyBagIcon],svg[marketeq-money-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.667 14.583s5.979-.479 8.5 1.188a7.38 7.38 0 0 0 5.5.896"></svg:path><svg:path stroke="#306CFE" d="m27.667 14.583l1.062-5.875a2.082 2.082 0 0 0-2.062-2.458h-7.5a2.083 2.083 0 0 0-2.084 2.458l1.084 5.875zm-4.75 29.167a30 30 0 0 0 8.729-1.187a8.33 8.33 0 0 0 5.854-7.959a14.3 14.3 0 0 0-1.5-6.25l-6.25-12.5a2.08 2.08 0 0 0-1.875-1.146h-9.917a2.08 2.08 0 0 0-1.875 1.146l-6.25 12.5a14.3 14.3 0 0 0-1.5 6.25v0a8.33 8.33 0 0 0 5.855 7.959a30 30 0 0 0 8.729 1.187"></svg:path></svg:g>`,
})
export class MarketeqMoneyBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyDollarIcon],svg[marketeq-money-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 18.75h-5.209a3.125 3.125 0 0 0-3.125 3.125v0A3.125 3.125 0 0 0 23.958 25h2.084a3.125 3.125 0 0 1 3.125 3.125v0a3.125 3.125 0 0 1-3.125 3.125h-5.209M25 33.333V31.25M43.75 12.5a2.083 2.083 0 0 0-2.083-2.083h-6.25a8.333 8.333 0 0 0 8.333 8.333zm-37.5 6.25a8.333 8.333 0 0 0 8.333-8.333h-6.25A2.083 2.083 0 0 0 6.25 12.5zm37.5 12.5a8.333 8.333 0 0 0-8.333 8.333h6.25A2.083 2.083 0 0 0 43.75 37.5zM6.25 37.5a2.083 2.083 0 0 0 2.083 2.083h6.25A8.333 8.333 0 0 0 6.25 31.25zM25 18.75v-2.083z"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.932-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMoneyDollarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyDollarCoinIcon],svg[marketeq-money-dollar-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 31.25h5.209a3.125 3.125 0 0 0 3.125-3.125v0A3.125 3.125 0 0 0 26.042 25h-2.084a3.125 3.125 0 1 1 0-6.25h5.209M25 33.333V31.25m0-12.5v-2.083z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqMoneyDollarCoinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyEuroIcon],svg[marketeq-money-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 20.354A6.25 6.25 0 0 0 25 18.75a6.25 6.25 0 0 0 0 12.5a6.25 6.25 0 0 0 4.167-1.604M16.667 25h6.25zM43.75 12.5a2.083 2.083 0 0 0-2.083-2.083h-6.25a8.333 8.333 0 0 0 8.333 8.333zm-37.5 6.25a8.333 8.333 0 0 0 8.333-8.333h-6.25A2.083 2.083 0 0 0 6.25 12.5zm37.5 12.5a8.334 8.334 0 0 0-8.333 8.333h6.25A2.083 2.083 0 0 0 43.75 37.5zM6.25 37.5a2.083 2.083 0 0 0 2.083 2.083h6.25A8.333 8.333 0 0 0 6.25 31.25z"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMoneyEuroIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMonitorIcon],svg[marketeq-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 41.667l-2.083-8.334h-12.5l-2.083 8.334z"></svg:path><svg:path stroke="#306CFE" d="M12.5 41.667h25zm29.167-8.334H8.333A2.083 2.083 0 0 1 6.25 31.25V10.417a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084V31.25a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqMonitorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoreCircleVerticalIcon],svg[marketeq-more-circle-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25 14.48v.207m0 10.209v.208m0 10.209v.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqMoreCircleVerticalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMoreVerticalIcon],svg[marketeq-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#344054" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M25 12.396v.208m0 12.292v.208m0 12.292v.208"></svg:path>`,
})
export class MarketeqMoreVerticalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMosqueIcon],svg[marketeq-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M28.125 11.438a3.675 3.675 0 1 1-5.208-5.188M25 12.5v6.25"></svg:path><svg:path stroke="#306CFE" d="M39.583 43.75a18.6 18.6 0 0 0 2.084-7.646c0-4.166-1.917-6.77-6.75-9.396A36.3 36.3 0 0 1 25 18.75a36.3 36.3 0 0 1-9.917 7.958c-4.833 2.625-6.75 5.313-6.75 9.396a18.6 18.6 0 0 0 2.084 7.646z"></svg:path></svg:g>`,
})
export class MarketeqMosqueIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMountainIcon],svg[marketeq-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 18.75a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h14.584l4.937-10.125L22.667 24A2.083 2.083 0 0 0 19 24zm30 0H22.917l9.375-19.23l7.916 16.23a2.083 2.083 0 0 1-1.875 3"></svg:path><svg:path stroke="#344054" d="M6.25 43.75h37.5"></svg:path></svg:g>`,
})
export class MarketeqMountainIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMouseIcon],svg[marketeq-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583v2.084"></svg:path><svg:path stroke="#306CFE" d="M25 6.25a13.79 13.79 0 0 1 13.77 14.583l-.583 10.417A13.187 13.187 0 0 1 25 43.75v0a13.187 13.187 0 0 1-13.187-12.5l-.584-10.417A13.79 13.79 0 0 1 25 6.25"></svg:path></svg:g>`,
})
export class MarketeqMouseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMp3PlayerIcon],svg[marketeq-mp3-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m35.417 27.083l8.333 2.084V25l-8.333-2.083v16.666zm-4.167 8.334a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h25a2.083 2.083 0 0 1 2.084 2.083v6.25"></svg:path><svg:path stroke="#306CFE" d="M20.833 27.083a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class MarketeqMp3PlayerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMultiFolderIcon],svg[marketeq-multi-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M14.583 35.417h-6.25a2.083 2.083 0 0 1-2.083-2.084v-25A2.083 2.083 0 0 1 8.333 6.25h8.334a2.08 2.08 0 0 1 1.479.604l5.02 5.042a2.08 2.08 0 0 0 1.48.604h10.77a2.083 2.083 0 0 1 2.084 2.083v6.25"></svg:path><svg:path stroke="#344054" d="M41.667 20.833h-25c-1.15 0-2.084.933-2.084 2.084v18.75c0 1.15.933 2.083 2.084 2.083h25c1.15 0 2.083-.933 2.083-2.083v-18.75c0-1.15-.933-2.084-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqMultiFolderIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMusic1Icon],svg[marketeq-music-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M27.083 36.458V6.25a54 54 0 0 0 7.167 6.25c3.458 2.23 3.98 5.75 2.396 10.417"></svg:path><svg:path d="M19.792 43.75a7.292 7.292 0 1 0 0-14.583a7.292 7.292 0 0 0 0 14.583"></svg:path></svg:g>`,
})
export class MarketeqMusic1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMusicAlbum2Icon],svg[marketeq-music-album-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 33.333a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#344054" d="M22.917 29.167v-12.5a6.04 6.04 0 0 1 6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M37.5 41.667H8.333a2.083 2.083 0 0 1-2.083-2.084V10.417a2.083 2.083 0 0 1 2.083-2.084H37.5a2.083 2.083 0 0 1 2.083 2.084v29.166a2.083 2.083 0 0 1-2.083 2.084m2.083-25v16.666a10.417 10.417 0 0 0 0-16.666"></svg:path></svg:g>`,
})
export class MarketeqMusicAlbum2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMusicDisableIcon],svg[marketeq-music-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M27.083 36.458V6.25a54 54 0 0 0 7.167 6.25c3.458 2.23 3.98 5.75 2.396 10.417"></svg:path><svg:path stroke="#306CFE" d="M19.792 43.75a7.292 7.292 0 1 0 0-14.583a7.292 7.292 0 0 0 0 14.583"></svg:path><svg:path stroke="#344054" d="M39.583 43.75L10.417 6.25"></svg:path></svg:g>`,
})
export class MarketeqMusicDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMusicFile2Icon],svg[marketeq-music-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#344054" d="M41.667 33.333a6.04 6.04 0 0 0-6.25-6.25v12.5"></svg:path><svg:path stroke="#306CFE" d="M18.75 39.583h-8.333A2.083 2.083 0 0 1 8.333 37.5V18.75l12.5-12.5h12.5a2.083 2.083 0 0 1 2.084 2.083V18.75"></svg:path><svg:path stroke="#306CFE" d="M20.833 18.75V6.25l-12.5 12.5z"></svg:path></svg:g>`,
})
export class MarketeqMusicFile2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqMuteIcon],svg[marketeq-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m35.417 6.25l-14.25 10.417H12.5a2.083 2.083 0 0 0-2.083 2.083v12.5a2.083 2.083 0 0 0 2.083 2.083h8.667l14.25 10.417z"></svg:path><svg:path stroke="#344054" d="M43.75 38.813L6.25 11.186"></svg:path></svg:g>`,
})
export class MarketeqMuteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNextIcon],svg[marketeq-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m35.417 25l-25 18.75V6.25z"></svg:path>`,
})
export class MarketeqNextIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteAltIcon],svg[marketeq-note-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 31.25h12.5M29.167 12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083h8.334a2.083 2.083 0 0 1 2.083 2.083v2.084a2.083 2.083 0 0 1-2.083 2.083M18.75 22.917h12.5z"></svg:path><svg:path stroke="#306CFE" d="M37.5 8.333a2.083 2.083 0 0 1 2.083 2.084v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25A2.083 2.083 0 0 1 12.5 8.333"></svg:path></svg:g>`,
})
export class MarketeqNoteAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteBookIcon],svg[marketeq-note-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 6.25h-31.25c-1.15 0-2.084.933-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083h31.25c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" d="M10.417 16.667H6.25zm0 8.333H6.25zm0 8.333H6.25zm25-18.75H18.75v8.334h16.667z"></svg:path></svg:g>`,
})
export class MarketeqNoteBookIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteDownIcon],svg[marketeq-note-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333v-12.5m4.167-8.333h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083h8.334a2.083 2.083 0 0 1 2.083 2.083v2.084a2.083 2.083 0 0 1-2.083 2.083m-8.334 16.667L25 33.333l4.167-4.166"></svg:path><svg:path stroke="#306CFE" d="M37.5 8.333a2.083 2.083 0 0 1 2.083 2.084v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25A2.083 2.083 0 0 1 12.5 8.333"></svg:path></svg:g>`,
})
export class MarketeqNoteDownIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteTextIcon],svg[marketeq-note-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 20.833v12.5M29.167 12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083h8.334a2.083 2.083 0 0 1 2.083 2.083v2.084a2.083 2.083 0 0 1-2.083 2.083M18.75 20.833h12.5z"></svg:path><svg:path stroke="#306CFE" d="M37.5 8.333a2.083 2.083 0 0 1 2.083 2.084v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25A2.083 2.083 0 0 1 12.5 8.333"></svg:path></svg:g>`,
})
export class MarketeqNoteTextIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNoteUpIcon],svg[marketeq-note-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 20.833v12.5M29.167 12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083h8.334a2.083 2.083 0 0 1 2.083 2.083v2.084a2.083 2.083 0 0 1-2.083 2.083M20.833 25L25 20.833L29.167 25"></svg:path><svg:path stroke="#306CFE" d="M37.5 8.333a2.083 2.083 0 0 1 2.083 2.084v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25A2.083 2.083 0 0 1 12.5 8.333"></svg:path></svg:g>`,
})
export class MarketeqNoteUpIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNotebookIcon],svg[marketeq-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 6.25H10.417c-1.15 0-2.084.933-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083h29.166c1.15 0 2.084-.933 2.084-2.083V8.333c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#344054" d="M10.417 6.25h6.25v37.5h-6.25a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqNotebookIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNotificationAltIcon],svg[marketeq-notification-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38.542 16.667a5.208 5.208 0 1 0 0-10.417a5.208 5.208 0 0 0 0 10.417"></svg:path><svg:path stroke="#306CFE" d="M41.667 25v12.5a4.167 4.167 0 0 1-4.167 4.167h-25A4.167 4.167 0 0 1 8.333 37.5v-25A4.167 4.167 0 0 1 12.5 8.333H25"></svg:path></svg:g>`,
})
export class MarketeqNotificationAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNotificationBellIcon],svg[marketeq-notification-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 37.5h-12.5a6.25 6.25 0 0 0 12.5 0"></svg:path><svg:path stroke="#306CFE" d="M40.375 29.958a4.42 4.42 0 0 1 1.292 3.125v0A4.417 4.417 0 0 1 37.25 37.5h-24.5a4.416 4.416 0 0 1-4.417-4.417v0a4.42 4.42 0 0 1 1.292-3.125l2.875-2.875V18.75A12.5 12.5 0 0 1 25 6.25v0a12.5 12.5 0 0 1 12.5 12.5v8.333z"></svg:path></svg:g>`,
})
export class MarketeqNotificationBellIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqNotificationCircleIcon],svg[marketeq-notification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 37.5h-12.5a6.25 6.25 0 0 0 12.5 0"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75v8.333l2.875 2.875A4.417 4.417 0 0 1 37.25 37.5h-24.5a4.416 4.416 0 0 1-3.125-7.542l2.875-2.875V18.75A12.5 12.5 0 0 1 25 6.25a12.5 12.5 0 0 1 6 1.52"></svg:path><svg:path stroke="#344054" d="M29.167 12.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0"></svg:path></svg:g>`,
})
export class MarketeqNotificationCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPackageIcon],svg[marketeq-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 16.667h-12.5V31.25L25 29.167l6.25 2.083z"></svg:path><svg:path stroke="#306CFE" d="M43.75 16.667v25a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083v-25m0 0l9.813-9.813a2.08 2.08 0 0 1 1.458-.604h14.958c.547.002 1.07.22 1.459.604l9.812 9.813z"></svg:path></svg:g>`,
})
export class MarketeqPackageIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPackageAlt2Icon],svg[marketeq-package-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 16.667h37.5v25a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083z"></svg:path><svg:path stroke="#344054" d="M25 6.25v20.833"></svg:path><svg:path stroke="#306CFE" d="m43.75 16.667l-9.812-9.813a2.08 2.08 0 0 0-1.459-.604H17.521c-.547.002-1.07.22-1.459.604L6.25 16.667"></svg:path></svg:g>`,
})
export class MarketeqPackageAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPaintRollerIcon],svg[marketeq-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 10.417H8.333A2.083 2.083 0 0 0 6.25 12.5v6.458a2.083 2.083 0 0 0 1.875 2.084l17.083 1.708a2.083 2.083 0 0 1 1.875 2.083v4.334"></svg:path><svg:path stroke="#306CFE" d="M12.5 12.5V8.333a2.083 2.083 0 0 1 2.083-2.083h25a2.083 2.083 0 0 1 2.084 2.083V12.5a2.083 2.083 0 0 1-2.084 2.083h-25A2.083 2.083 0 0 1 12.5 12.5m14.583 31.25a4.167 4.167 0 0 0 4.167-4.167V31.25a2.083 2.083 0 0 0-2.083-2.083H25a2.083 2.083 0 0 0-2.083 2.083v8.333a4.167 4.167 0 0 0 4.166 4.167"></svg:path></svg:g>`,
})
export class MarketeqPaintRollerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPantoneIcon],svg[marketeq-pantone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 37.5V8.333A2.083 2.083 0 0 1 8.333 6.25h8.334a2.083 2.083 0 0 1 2.083 2.083v14.084"></svg:path><svg:path stroke="#344054" d="m9.917 31.25l18.75-18.75a2.083 2.083 0 0 1 2.937 0l5.896 5.854a2.083 2.083 0 0 1 0 2.938l-9.917 9.958"></svg:path><svg:path stroke="#306CFE" d="M6.25 37.5a6.25 6.25 0 0 1 6.25-6.25h29.167a2.083 2.083 0 0 1 2.083 2.083v8.334a2.083 2.083 0 0 1-2.083 2.083H12.5a6.25 6.25 0 0 1-6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqPantoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqParabolicFunctionIcon],svg[marketeq-parabolic-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 6.25c.458 14.27 2.541 25 6.25 25s5.791-10.73 6.25-25"></svg:path><svg:path stroke="#306CFE" d="M43.75 39.583H6.25M10.417 6.25v37.5z"></svg:path></svg:g>`,
})
export class MarketeqParabolicFunctionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqParkingSquareIcon],svg[marketeq-parking-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 35.417V14.583H25a6.25 6.25 0 1 1 0 12.5h-6.25"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqParkingSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPauseIcon],svg[marketeq-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.583 6.25h4.167a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-4.167a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083m16.667 37.5h4.167a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083H31.25a2.083 2.083 0 0 0-2.083 2.083v33.334a2.083 2.083 0 0 0 2.083 2.083"></svg:path>`,
})
export class MarketeqPauseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPauseCircleIcon],svg[marketeq-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 16.667v16.666m8.334-16.666v16.666z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqPauseCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPencilRulerIcon],svg[marketeq-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.146 9.77l-2.917-2.916a2.083 2.083 0 0 0-2.916 0l-10.23 10.23v5.833h5.834l10.229-10.23a2.083 2.083 0 0 0 0-2.916"></svg:path><svg:path stroke="#306CFE" d="M14.583 6.25v37.5H6.25V6.25zm25 29.167h-25v8.333h25z"></svg:path></svg:g>`,
})
export class MarketeqPencilRulerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPendulumIcon],svg[marketeq-pendulum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 6.25v29.167m0 8.333a4.167 4.167 0 1 1 0-8.334a4.167 4.167 0 0 1 0 8.334"></svg:path><svg:path stroke="#344054" d="M10.417 6.25h29.166"></svg:path></svg:g>`,
})
export class MarketeqPendulumIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPendulum5Icon],svg[marketeq-pendulum-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M15.833 35.604L25 6.25m10.417 33.333a4.166 4.166 0 1 0-8.332 0a4.166 4.166 0 0 0 8.332 0M31.25 6.25v29.167zm-16.667 37.5a4.167 4.167 0 1 0 0-8.334a4.167 4.167 0 0 0 0 8.334"></svg:path><svg:path stroke="#344054" d="M10.417 6.25h29.166"></svg:path></svg:g>`,
})
export class MarketeqPendulum5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPhoneIcon],svg[marketeq-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 31.25v8.187a4.166 4.166 0 0 1-4.77 4.167A37.5 37.5 0 0 1 6.541 11.021a4.167 4.167 0 0 1 4.146-4.771h8.062a2.083 2.083 0 0 1 2.083 1.854c.207 2.73.913 5.4 2.084 7.875a2.083 2.083 0 0 1-.875 2.625l-1.792 1.02a2.085 2.085 0 0 0-.687 3.043a29.3 29.3 0 0 0 7.687 7.687a2.083 2.083 0 0 0 3.042-.687l1.02-1.792a2.083 2.083 0 0 1 2.709-.792a22.4 22.4 0 0 0 7.875 2.084a2.083 2.083 0 0 1 1.854 2.083"></svg:path>`,
})
export class MarketeqPhoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPhoneSquareIcon],svg[marketeq-phone-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m34.042 34.438l.895-1.376a2.897 2.897 0 0 0-1.062-4.166a26 26 0 0 1-1.5-.854a2.917 2.917 0 0 0-3.917.75l-2.666 3.791a19.6 19.6 0 0 0 6.25 2.792a1.71 1.71 0 0 0 2-.937M14.583 17.854a19.6 19.6 0 0 0 2.792 6.25l3.792-2.666a2.916 2.916 0 0 0 .75-3.917c-.292-.48-.584-.98-.855-1.5a2.895 2.895 0 0 0-4.166-1.063l-1.375.896a1.71 1.71 0 0 0-.938 2m11.209 14.729a28 28 0 0 1-4.625-3.75a28 28 0 0 1-3.75-4.625"></svg:path><svg:path stroke="#306CFE" d="M39.583 6.25H10.417a4.167 4.167 0 0 0-4.167 4.167v29.166a4.167 4.167 0 0 0 4.167 4.167h29.166a4.167 4.167 0 0 0 4.167-4.167V10.417a4.167 4.167 0 0 0-4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqPhoneSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPicnicBasket2Icon],svg[marketeq-picnic-basket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M32.042 43.75H17.958a8.333 8.333 0 0 1-8.333-7.5L8.333 22.917h33.334L40.333 36.25a8.334 8.334 0 0 1-8.291 7.5M25 6.25a14.583 14.583 0 0 0-14.583 14.583v2.084h29.166v-2.084A14.583 14.583 0 0 0 25 6.25m1.73 26.563l6.603-9.896H16.667l6.604 9.895a2.08 2.08 0 0 0 3.458 0"></svg:path><svg:path stroke="#344054" d="M6.25 22.917h37.5"></svg:path></svg:g>`,
})
export class MarketeqPicnicBasket2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPicnicBasket3Icon],svg[marketeq-picnic-basket-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M32.042 43.75H17.958a8.333 8.333 0 0 1-8.333-7.5L8.333 22.917h33.334L40.333 36.25a8.334 8.334 0 0 1-8.291 7.5M25 6.25a14.583 14.583 0 0 0-14.583 14.583v2.084h29.166v-2.084A14.583 14.583 0 0 0 25 6.25"></svg:path><svg:path stroke="#344054" d="M6.25 22.917h37.5"></svg:path></svg:g>`,
})
export class MarketeqPicnicBasket3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPipe4Icon],svg[marketeq-pipe-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M8.333 33.333v-25h8.334v25H25V22.917a8.333 8.333 0 0 1 8.333-8.334H43.75v8.334H33.333v10.416A8.333 8.333 0 0 1 25 41.667h-8.333a8.333 8.333 0 0 1-8.334-8.334"></svg:path><svg:path stroke="#344054" d="M18.75 8.333H6.25M43.75 25V12.5z"></svg:path></svg:g>`,
})
export class MarketeqPipe4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPlaceDisableIcon],svg[marketeq-place-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75s-12.5-14.583-12.5-25a12.5 12.5 0 0 1 25 0c0 10.417-12.5 25-12.5 25"></svg:path><svg:path stroke="#344054" d="M8.333 8.333L41.667 37.5"></svg:path></svg:g>`,
})
export class MarketeqPlaceDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPlayIcon],svg[marketeq-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 25l-12.5 8.333V16.667z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqPlayIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPlungerIcon],svg[marketeq-plunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a10.3 10.3 0 0 1 4.167.875V10.417a4.167 4.167 0 1 0-8.334 0v21.708A10.3 10.3 0 0 1 25 31.25"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75h25m-2.083 0H14.583v-2.083a10.417 10.417 0 0 1 20.834 0z"></svg:path></svg:g>`,
})
export class MarketeqPlungerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPlusIcon],svg[marketeq-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 10.417v29.166M10.417 25h29.166z"></svg:path>`,
})
export class MarketeqPlusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPodiumIcon],svg[marketeq-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m24.042 8.208l-2.167.313l1.563 1.52l-.375 2.146l1.937-1l1.938 1l-.375-2.145l1.562-1.521l-2.167-.313L25 6.25z"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75H6.25V33.333h12.5zm12.5-22.917h-12.5V43.75h12.5zm12.5 8.334h-12.5V43.75h12.5z"></svg:path></svg:g>`,
})
export class MarketeqPodiumIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPowerIcon],svg[marketeq-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25V25"></svg:path><svg:path stroke="#306CFE" d="M36.792 15.292a16.667 16.667 0 1 1-23.584 0"></svg:path></svg:g>`,
})
export class MarketeqPowerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPowerBankIcon],svg[marketeq-power-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 25l2.083-4.167h-4.166l2.083-4.166m0 18.75v6.25a2.083 2.083 0 0 0 2.083 2.083H37.5a2.083 2.083 0 0 0 2.083-2.083V18.75"></svg:path><svg:path stroke="#306CFE" d="M29.167 33.333v-25a2.083 2.083 0 0 0-2.084-2.083H10.417a2.083 2.083 0 0 0-2.084 2.083v25a2.083 2.083 0 0 0 2.084 2.084h16.666a2.083 2.083 0 0 0 2.084-2.084m12.5-22.916H37.5v6.25h4.167z"></svg:path></svg:g>`,
})
export class MarketeqPowerBankIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPresentCircleIcon],svg[marketeq-present-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 27.083a5.208 5.208 0 1 0 0-10.416a5.208 5.208 0 0 0 0 10.416"></svg:path><svg:path stroke="#306CFE" d="m28.333 35.417l5 6.25m6.25-6.25H10.417a2.083 2.083 0 0 1-2.084-2.084v-25h33.334v25a2.083 2.083 0 0 1-2.084 2.084M6.25 8.333h37.5zm15.417 27.084l-5 6.25z"></svg:path></svg:g>`,
})
export class MarketeqPresentCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPresentGrowIcon],svg[marketeq-present-grow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 27.083c8.333 0 11.937-5.791 14.583-10.416"></svg:path><svg:path stroke="#344054" d="M25 16.667h6.25l2.083 6.25"></svg:path><svg:path stroke="#306CFE" d="m28.333 35.417l5 6.25m6.25-6.25H10.417a2.083 2.083 0 0 1-2.084-2.084v-25h33.334v25a2.083 2.083 0 0 1-2.084 2.084M6.25 8.333h37.5zm15.417 27.084l-5 6.25z"></svg:path></svg:g>`,
})
export class MarketeqPresentGrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPresentationBarChartIcon],svg[marketeq-presentation-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 25v-6.25M25 33.333V43.75zm2.083 10.417h-4.166zM25 25V14.583zm8.333 0v-6.25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 6.25h37.5m-35.417 0h33.334v25a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083z"></svg:path></svg:g>`,
})
export class MarketeqPresentationBarChartIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPriceTagIcon],svg[marketeq-price-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M34.27 15.625h.21"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 20.833v-12.5a2.083 2.083 0 0 0-2.083-2.083h-12.5l-21.5 21.375a2.083 2.083 0 0 0 0 2.938l11.791 11.791a2.084 2.084 0 0 0 2.938 0z"></svg:path></svg:g>`,
})
export class MarketeqPriceTagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPrintAlt3Icon],svg[marketeq-print-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.604 33.333h6.063a2.083 2.083 0 0 0 2.083-2.083V14.583a2.083 2.083 0 0 0-2.083-2.083H8.333a2.083 2.083 0 0 0-2.083 2.083V31.25a2.083 2.083 0 0 0 2.083 2.083h6.063M35.417 6.25H14.583v6.25h20.834z"></svg:path><svg:path stroke="#344054" d="M37.5 43.75h-25l4.167-22.917h16.666z"></svg:path></svg:g>`,
})
export class MarketeqPrintAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPrintAlt9Icon],svg[marketeq-print-alt-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 33.333H8.333A2.083 2.083 0 0 1 6.25 31.25V14.583A2.083 2.083 0 0 1 8.333 12.5h33.334a2.083 2.083 0 0 1 2.083 2.083V31.25a2.083 2.083 0 0 1-2.083 2.083H37.5M16.667 6.25h16.666"></svg:path><svg:path stroke="#344054" d="M37.5 20.833h-25V43.75h25z"></svg:path><svg:path stroke="#344054" d="m20.833 33.333l2.084 2.084l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqPrintAlt9Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqProcessorIcon],svg[marketeq-processor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 33.333H8.333M25 12.5V6.25zm8.333 0V8.333zm-16.666 0V8.333zM37.5 25h6.25zm0 8.333h4.167zm0-16.666h4.167zM25 37.5v6.25zm-8.333 0v4.167zm16.666 0v4.167zM12.5 25H6.25zm0-8.333H8.333z"></svg:path><svg:path stroke="#306CFE" d="M35.417 37.5H14.583a2.083 2.083 0 0 1-2.083-2.083V14.583a2.083 2.083 0 0 1 2.083-2.083h20.834a2.083 2.083 0 0 1 2.083 2.083v20.834a2.083 2.083 0 0 1-2.083 2.083m-6.25-16.667h-8.334v8.334h8.334z"></svg:path></svg:g>`,
})
export class MarketeqProcessorIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqPushPinIcon],svg[marketeq-push-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25v12.5"></svg:path><svg:path stroke="#306CFE" d="M14.583 6.25h20.834m-.23 17.604a4.17 4.17 0 0 1 2.313 3.73v3.666h-25v-3.667a4.17 4.17 0 0 1 2.313-3.729l1.854-.937L18.75 6.25h12.5l2.083 16.667z"></svg:path></svg:g>`,
})
export class MarketeqPushPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqQrCodeScan2Icon],svg[marketeq-qr-code-scan-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 22.917h-8.334v-8.334h8.334zm12.5-8.334H31.25v4.167h4.167zm-8.334 20.834h8.334v-8.334h-8.334zm-12.5 0h4.167V31.25h-4.167z"></svg:path><svg:path stroke="#306CFE" d="M16.667 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v8.334m37.5 0V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334M6.25 33.333v8.334a2.083 2.083 0 0 0 2.083 2.083h8.334m16.666 0h8.334a2.083 2.083 0 0 0 2.083-2.083v-8.334"></svg:path></svg:g>`,
})
export class MarketeqQrCodeScan2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqQuestionIcon],svg[marketeq-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 27.083c0-4.166 6.25-2.083 6.25-8.333s-12.5-6.25-12.5 0"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 35.417h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqQuestionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRadiusIcon],svg[marketeq-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 25h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M43.75 25H25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqRadiusIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqReceiptAddIcon],svg[marketeq-receipt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.292 19.792H21.875m5.208-5.209V25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v30.209a5.208 5.208 0 1 1-10.417 0v-5.209H10.417v-25A2.083 2.083 0 0 1 12.5 6.25h29.167a2.083 2.083 0 0 1 2.083 2.083M33.333 38.542v-5.209H6.25v5.209a5.21 5.21 0 0 0 5.208 5.208h27.084a5.21 5.21 0 0 1-5.209-5.208"></svg:path></svg:g>`,
})
export class MarketeqReceiptAddIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqReceiptCheckIcon],svg[marketeq-receipt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 20.833L25 25l8.333-8.333"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v30.209a5.208 5.208 0 1 1-10.417 0v-5.209H10.417v-25A2.083 2.083 0 0 1 12.5 6.25h29.167a2.083 2.083 0 0 1 2.083 2.083M33.333 38.542v-5.209H6.25v5.209a5.21 5.21 0 0 0 5.208 5.208h27.084a5.21 5.21 0 0 1-5.209-5.208"></svg:path></svg:g>`,
})
export class MarketeqReceiptCheckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqReceiptCleseIcon],svg[marketeq-receipt-clese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 14.583L22.917 25m0-10.417L31.25 25"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v30.209a5.208 5.208 0 1 1-10.417 0v-5.209H10.417v-25A2.083 2.083 0 0 1 12.5 6.25h29.167a2.083 2.083 0 0 1 2.083 2.083M33.333 38.542v-5.209H6.25v5.209a5.21 5.21 0 0 0 5.208 5.208h27.084a5.21 5.21 0 0 1-5.209-5.208"></svg:path></svg:g>`,
})
export class MarketeqReceiptCleseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqReceiptDownIcon],svg[marketeq-receipt-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 20.833L27.083 25l4.167-4.167M27.083 25V14.583"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v30.209a5.208 5.208 0 1 1-10.417 0v-5.209H10.417v-25A2.083 2.083 0 0 1 12.5 6.25h29.167a2.083 2.083 0 0 1 2.083 2.083M33.333 38.542v-5.209H6.25v5.209a5.21 5.21 0 0 0 5.208 5.208h27.084a5.21 5.21 0 0 1-5.209-5.208"></svg:path></svg:g>`,
})
export class MarketeqReceiptDownIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqReceiptRemoveIcon],svg[marketeq-receipt-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.292 19.792H21.875"></svg:path><svg:path stroke="#306CFE" d="M43.75 8.333v30.209a5.208 5.208 0 1 1-10.417 0v-5.209H10.417v-25A2.083 2.083 0 0 1 12.5 6.25h29.167a2.083 2.083 0 0 1 2.083 2.083M33.333 38.542v-5.209H6.25v5.209a5.21 5.21 0 0 0 5.208 5.208h27.084a5.21 5.21 0 0 1-5.209-5.208"></svg:path></svg:g>`,
})
export class MarketeqReceiptRemoveIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRecycleIcon],svg[marketeq-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m11.167 28.438l-4.605 7.77a2.25 2.25 0 0 0 1.959 3.375h14.396m10.416 0l8.188.105a2.23 2.23 0 0 0 1.916-3.376l-7.041-12.229m-4.958-8.813l-4.355-7.895a2.25 2.25 0 0 0-3.895 0l-7.209 12.5"></svg:path><svg:path stroke="#344054" d="m19.375 35.417l3.542 4.166l-4.167 4.167M34.417 29l1.833-5.146l5.688 1.521m-20.646-6.5l-5.375.98l-1.521-5.688"></svg:path></svg:g>`,
})
export class MarketeqRecycleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRefreshIcon],svg[marketeq-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 12.5H8.333a2.083 2.083 0 0 0-2.083 2.083v20.834A2.083 2.083 0 0 0 8.333 37.5h20.834m8.333 0h4.167a2.083 2.083 0 0 0 2.083-2.083V14.583a2.083 2.083 0 0 0-2.083-2.083H20.833"></svg:path><svg:path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></svg:path></svg:g>`,
})
export class MarketeqRefreshIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRefreshRoundIcon],svg[marketeq-refresh-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M29.167 37.5H18.75a12.5 12.5 0 0 1-7.208-22.687m9.291-2.313H31.25a12.5 12.5 0 0 1 7.208 22.688"></svg:path><svg:path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></svg:path></svg:g>`,
})
export class MarketeqRefreshRoundIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRejectedFile2Icon],svg[marketeq-rejected-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m21.875 21.875l6.25 6.25m0-6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M14.583 6.25H37.5a2.083 2.083 0 0 1 2.083 2.083v33.334A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083v-31.25zm-4.166 4.167h4.166V6.25z"></svg:path></svg:g>`,
})
export class MarketeqRejectedFile2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqResearchIcon],svg[marketeq-research-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 25v10.417zm-8.334 10.417V31.25zM6.25 31.25l5.896-5.896zm10.417-16.667a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path><svg:path stroke="#306CFE" d="M16.667 6.25h25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-25a2.083 2.083 0 0 1-2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqResearchIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqResearchPresentationLeftIcon],svg[marketeq-research-presentation-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 16.667H16.667M31.604 37.75l5.896 6zm-4.52-10.667a6.25 6.25 0 1 1-.001 12.501a6.25 6.25 0 0 1 0-12.5"></svg:path><svg:path stroke="#306CFE" d="M41.667 31.25v-25H8.333v25a2.083 2.083 0 0 0 2.084 2.083H12.5M43.75 6.25H6.25"></svg:path></svg:g>`,
})
export class MarketeqResearchPresentationLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRewardIcon],svg[marketeq-reward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m29.27 35.625l4.063 8.125l4.125-4.23l6.292.063l-5.854-11.625v-.02M20.73 35.625l-4.063 8.125l-4.125-4.23l-6.292.063l5.854-11.625v-.02"></svg:path><svg:path stroke="#306CFE" d="M40.167 20.833c0 1.584-1.396 2.917-1.855 4.334c-.458 1.416-.145 3.354-1.041 4.583s-2.813 1.5-3.938 2.417s-2.083 2.625-3.541 3.104c-1.459.479-3.105-.438-4.688-.438s-3.27.896-4.687.438c-1.417-.459-2.313-2.23-3.542-3.104c-1.23-.875-3.146-1.188-4.042-2.417c-.896-1.23-.562-3.125-1.041-4.583c-.48-1.459-1.959-2.75-1.959-4.334s1.396-2.916 1.854-4.333s.146-3.354 1.042-4.583s2.813-1.5 4.042-2.417s1.979-2.625 3.541-3.104c1.563-.48 3.105.437 4.688.437s3.27-.896 4.688-.437C31.104 6.854 32 8.625 33.333 9.5s3.146 1.187 4.042 2.417s.563 3.125 1.042 4.583s1.75 2.75 1.75 4.333M25 14.583a6.25 6.25 0 1 0 0 12.501a6.25 6.25 0 0 0 0-12.5"></svg:path></svg:g>`,
})
export class MarketeqRewardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightCircleIcon],svg[marketeq-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m22.917 31.25l6.25-6.25l-6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqRightCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightCircle2Icon],svg[marketeq-right-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 25h16.666m-5.208-5.208L33.333 25l-5.208 5.208"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqRightCircle2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightDirectionIcon],svg[marketeq-right-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.875 20.833H8.333a2.083 2.083 0 0 0-2.083 2.084v4.166a2.083 2.083 0 0 0 2.083 2.084h21.542"></svg:path><svg:path stroke="#306CFE" d="m29.875 29.167l-6.083 7.083l6.25 5.417l13.125-15.313a2.084 2.084 0 0 0 0-2.708L30.125 8.333l-6.25 5.417l6 7.083"></svg:path></svg:g>`,
})
export class MarketeqRightDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightDirectionCircleIcon],svg[marketeq-right-direction-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 29.167H14.583v-8.334H25v-4.166l9.604 6.625a2.083 2.083 0 0 1 0 3.416L25 33.333z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqRightDirectionCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightDirectionSquareIcon],svg[marketeq-right-direction-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 29.167H14.583v-8.334H25v-4.166l9.604 6.625a2.083 2.083 0 0 1 0 3.416L25 33.333z"></svg:path><svg:path stroke="#306CFE" d="M8.333 43.75h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqRightDirectionSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightLeftScrollBarIcon],svg[marketeq-right-left-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 12.5v25"></svg:path><svg:path stroke="#306CFE" d="M12.5 29.167L16.667 25L12.5 20.833m25 0L33.333 25l4.167 4.167M43.75 25H33.333M6.25 25h10.417z"></svg:path></svg:g>`,
})
export class MarketeqRightLeftScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightSignIcon],svg[marketeq-right-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 6.25L20.833 25L10.417 43.75"></svg:path><svg:path stroke="#306CFE" d="M10.417 43.75h18.75L39.583 25L29.167 6.25h-18.75"></svg:path></svg:g>`,
})
export class MarketeqRightSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRightSquare3Icon],svg[marketeq-right-square-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 25H18.75m8.333 4.167L31.25 25l-4.167-4.167"></svg:path><svg:path stroke="#306CFE" d="m23.513 6.866l-16.66 16.66a2.083 2.083 0 0 0 0 2.947l16.66 16.661a2.083 2.083 0 0 0 2.947 0l16.66-16.66a2.083 2.083 0 0 0 0-2.947L26.46 6.866a2.083 2.083 0 0 0-2.947 0"></svg:path></svg:g>`,
})
export class MarketeqRightSquare3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRotateLockIcon],svg[marketeq-rotate-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 29.167h12.5a2.083 2.083 0 0 0 2.083-2.084V18.75a2.083 2.083 0 0 0-2.083-2.083h-12.5a2.083 2.083 0 0 0-2.084 2.083v8.333a2.083 2.083 0 0 0 2.084 2.084M31.25 12.5v4.167h8.333V12.5a4.167 4.167 0 0 0-4.166-4.167v0A4.167 4.167 0 0 0 31.25 12.5"></svg:path><svg:path stroke="#306CFE" d="M43.75 37.5v2.083a2.084 2.084 0 0 1-2.083 2.084H8.333a2.083 2.083 0 0 1-2.083-2.084V18.75a2.083 2.083 0 0 1 2.083-2.083H18.75"></svg:path><svg:path stroke="#306CFE" d="M6.25 25v8.333l4.167-1.041v-6.25z"></svg:path></svg:g>`,
})
export class MarketeqRotateLockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRouter4Icon],svg[marketeq-router-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 18.75V8.333m6.25 35.417H10.417a2.083 2.083 0 0 1-2.084-2.083V20.833a2.083 2.083 0 0 1 2.084-2.083h29.166a2.083 2.083 0 0 1 2.084 2.083v20.834a2.084 2.084 0 0 1-2.084 2.083"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M16.667 27.083h4.166"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M33.23 7.292h.208"></svg:path></svg:g>`,
})
export class MarketeqRouter4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler10Icon],svg[marketeq-ruler-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 10.417V6.25m18.75 29.167h-4.167zm0-10.417h-4.167zM14.583 10.417V6.25z"></svg:path><svg:path stroke="#306CFE" d="M31.25 18.75L43.146 6.854M6.25 18.75V6.25h35.417a2.083 2.083 0 0 1 2.083 2.083V43.75h-12.5v-25z"></svg:path></svg:g>`,
})
export class MarketeqRuler10Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler2Icon],svg[marketeq-ruler-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 35.417h4.167m-4.167-20.834h4.167zm0 10.417h4.167z"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75h12.5V6.25h-12.5z"></svg:path></svg:g>`,
})
export class MarketeqRuler2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler6Icon],svg[marketeq-ruler-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m22.063 13.208l-2.959 2.959m17.688 11.77l-2.959 2.959zm-7.375-7.354l-2.938 2.938z"></svg:path><svg:path stroke="#306CFE" d="m15.087 6.247l-8.839 8.839l28.667 28.667l8.84-8.839z"></svg:path></svg:g>`,
})
export class MarketeqRuler6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler7Icon],svg[marketeq-ruler-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 39.583v4.167M6.25 14.583h4.167zM6.25 25h4.167zm29.167 14.583v4.167z"></svg:path><svg:path stroke="#306CFE" d="M18.75 31.25L6.854 43.146M43.75 31.25v12.5H8.333a2.083 2.083 0 0 1-2.083-2.083V6.25h12.5v25z"></svg:path></svg:g>`,
})
export class MarketeqRuler7Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSafeboxIcon],svg[marketeq-safebox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 22.917h-2.083m14.583 0a6.25 6.25 0 1 0-12.5 0a6.25 6.25 0 0 0 12.5 0M25 16.667v-2.084zm6.25 6.25h2.083zM25 29.167v2.083z"></svg:path><svg:path stroke="#306CFE" d="M41.667 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083V37.5a2.083 2.083 0 0 1-2.083 2.083m-25 0H12.5v4.167h4.167zm16.666 4.167H37.5v-4.167h-4.167z"></svg:path></svg:g>`,
})
export class MarketeqSafeboxIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSafebox2Icon],svg[marketeq-safebox-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 22.917h4.166m-4.166 0a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#306CFE" d="M41.667 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083V37.5a2.083 2.083 0 0 1-2.083 2.083m-25 0H12.5v4.167h4.167zm16.666 4.167H37.5v-4.167h-4.167z"></svg:path></svg:g>`,
})
export class MarketeqSafebox2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSailboatIcon],svg[marketeq-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.583 32.167L22.917 12.5m16.458 16.667A25.69 25.69 0 0 0 22.917 8.333v22.5"></svg:path><svg:path stroke="#306CFE" d="M28.48 41.667H9.5a2.08 2.08 0 0 1-2.083-1.605L6.25 35.418a2.083 2.083 0 0 1 1.813-2.688l33.333-3.604a2.082 2.082 0 0 1 2.083 3.146a16.94 16.94 0 0 1-15 9.396"></svg:path></svg:g>`,
})
export class MarketeqSailboatIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSatelliteDishIcon],svg[marketeq-satellite-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="m31.917 16l7.666-7.667"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M39.688 8.333h-.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="m12.5 43.75l7.083-18.23m8.709 5.293l5.041 12.937m-25 0H37.5M22.917 6.896a2.21 2.21 0 0 0-3.313.229a15.27 15.27 0 0 0 21.188 21.292a2.21 2.21 0 0 0 .229-3.313z"></svg:path></svg:g>`,
})
export class MarketeqSatelliteDishIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSaveErrorLeftIcon],svg[marketeq-save-error-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M41.667 27.083v6.25m-12.5-18.75h4.166z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M41.563 42.708h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 43.75H10.417a2.083 2.083 0 0 1-2.084-2.083V14.583l8.334-8.333h22.916a2.084 2.084 0 0 1 2.084 2.083V18.75"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 31.25H16.667v12.5h16.666z"></svg:path></svg:g>`,
})
export class MarketeqSaveErrorLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqScanAltIcon],svg[marketeq-scan-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 29.167v-8.334M25 33.333V16.667zm-8.333-4.166v-8.334z"></svg:path><svg:path stroke="#306CFE" d="M16.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083v-8.334M33.333 43.75h8.334a2.083 2.083 0 0 0 2.083-2.083v-8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 33.333v8.334a2.083 2.083 0 0 0 2.083 2.083h8.334M6.25 16.667V8.333A2.083 2.083 0 0 1 8.333 6.25h8.334M43.75 16.667V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334"></svg:path></svg:g>`,
})
export class MarketeqScanAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSchoolBagIcon],svg[marketeq-school-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 35.417h8.334zm8.334-27.084a2.083 2.083 0 0 0-2.084-2.083h-4.166a2.083 2.083 0 0 0-2.084 2.083v2.084h8.334zm8.333 31.25h2.083a2.084 2.084 0 0 0 2.084-2.083v-6.25H37.5zm-25-8.333H8.333v6.25a2.083 2.083 0 0 0 2.084 2.083H12.5z"></svg:path><svg:path stroke="#306CFE" d="M39.583 18.75V12.5a2.083 2.083 0 0 0-2.083-2.083h-25a2.083 2.083 0 0 0-2.083 2.083v6.25a4.167 4.167 0 0 0 4.166 4.167h20.834a4.167 4.167 0 0 0 4.166-4.167m-4.166 4.167H14.583a4.17 4.17 0 0 1-2.083-.584v19.334a2.083 2.083 0 0 0 2.083 2.083h20.834a2.083 2.083 0 0 0 2.083-2.083V22.333a4.17 4.17 0 0 1-2.083.584"></svg:path><svg:path stroke="#344054" d="M25 20.833V25"></svg:path></svg:g>`,
})
export class MarketeqSchoolBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqScreenCaptureIcon],svg[marketeq-screen-capture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M43.75 18.75V8.333a2.083 2.083 0 0 0-2.083-2.083H31.25m0 37.5h10.417a2.083 2.083 0 0 0 2.083-2.083V31.25m-25-25H8.333A2.083 2.083 0 0 0 6.25 8.333V18.75m0 12.5v10.417a2.083 2.083 0 0 0 2.083 2.083H18.75"></svg:path></svg:g>`,
})
export class MarketeqScreenCaptureIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqScreenchotIcon],svg[marketeq-screenchot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqScreenchotIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSearchAlt2Icon],svg[marketeq-search-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.75 43.75l-9.042-9.042"></svg:path><svg:path stroke="#306CFE" d="M22.917 39.583c9.204 0 16.666-7.462 16.666-16.666S32.121 6.25 22.917 6.25S6.25 13.712 6.25 22.917c0 9.204 7.462 16.666 16.667 16.666"></svg:path></svg:g>`,
})
export class MarketeqSearchAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSearchAlt3Icon],svg[marketeq-search-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M41.667 41.667L31.146 31.146"></svg:path><svg:path stroke="#344054" stroke-width="3" d="m42.708 42.708l-7.291-7.291"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M20.833 35.417c8.055 0 14.584-6.53 14.584-14.584S28.887 6.25 20.833 6.25S6.25 12.78 6.25 20.833c0 8.055 6.53 14.584 14.583 14.584"></svg:path></svg:g>`,
})
export class MarketeqSearchAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSecureIcon],svg[marketeq-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 22.917l4.167 4.166l8.333-8.333"></svg:path><svg:path stroke="#306CFE" d="m25 43.75l1.833-.792a22.92 22.92 0 0 0 13.813-19.291l.896-11.5a2.08 2.08 0 0 0-1.584-2.084L25 6.25L10.042 10a2.08 2.08 0 0 0-1.584 2.083l.896 11.5a22.92 22.92 0 0 0 13.813 19.292z"></svg:path></svg:g>`,
})
export class MarketeqSecureIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSecuredFileFolder2Icon],svg[marketeq-secured-file-folder-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m37.5 29.167l6.25 2.083c0 8.333-1.292 10.625-6.25 12.5c-4.958-1.875-6.25-4.167-6.25-12.5z"></svg:path><svg:path stroke="#306CFE" d="M37.5 20.833V18.75a2.083 2.083 0 0 0-2.083-2.083h-6.25L25 20.833H8.333a2.083 2.083 0 0 0-2.083 2.084V37.5a2.083 2.083 0 0 0 2.083 2.083h14.584"></svg:path><svg:path stroke="#306CFE" d="M29.167 16.667L25 20.833H10.417v-12.5A2.083 2.083 0 0 1 12.5 6.25h18.75a2.083 2.083 0 0 1 2.083 2.083v8.334z"></svg:path></svg:g>`,
})
export class MarketeqSecuredFileFolder2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSettingsIcon],svg[marketeq-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M41.667 20.833h-1.23a2.08 2.08 0 0 1-1.958-1.395a2.08 2.08 0 0 1 .417-2.375l.854-.855a2.08 2.08 0 0 0 0-2.958l-2.958-2.98a2.084 2.084 0 0 0-2.959 0l-.854.855a2.08 2.08 0 0 1-2.375.417a2.08 2.08 0 0 1-1.437-1.98V8.334a2.083 2.083 0 0 0-2.084-2.083h-4.166a2.083 2.083 0 0 0-2.084 2.083v1.23a2.08 2.08 0 0 1-1.395 1.958v0a2.08 2.08 0 0 1-2.375-.417l-.855-.854a2.08 2.08 0 0 0-2.958 0l-2.98 2.958a2.084 2.084 0 0 0 0 2.959l.855.854a2.08 2.08 0 0 1 .417 2.375a2.08 2.08 0 0 1-1.959 1.396h-1.25a2.083 2.083 0 0 0-2.083 2.083v4.167a2.083 2.083 0 0 0 2.083 2.083h1.23a2.08 2.08 0 0 1 1.958 1.396v0a2.08 2.08 0 0 1-.417 2.375l-.854.854a2.083 2.083 0 0 0 0 2.958l2.938 2.938a2.084 2.084 0 0 0 2.958 0l.854-.854a2.08 2.08 0 0 1 2.375-.417a2.08 2.08 0 0 1 1.396 1.958v1.334a2.083 2.083 0 0 0 2.083 2.083h4.167a2.083 2.083 0 0 0 2.083-2.083v-1.23A2.08 2.08 0 0 1 30.5 38.48a2.08 2.08 0 0 1 2.375.417l.854.854a2.08 2.08 0 0 0 2.959 0l2.937-2.937a2.08 2.08 0 0 0 0-2.959L38.771 33a2.08 2.08 0 0 1-.417-2.375v0a2.08 2.08 0 0 1 1.959-1.396h1.354a2.083 2.083 0 0 0 2.083-2.083v-4.23a2.083 2.083 0 0 0-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqSettingsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSettingsAlt4Icon],svg[marketeq-settings-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42.708 42.708a4.167 4.167 0 0 1-5.895 0L25.958 31.854A13.73 13.73 0 0 1 16.667 33A13.54 13.54 0 0 1 6.25 21a13.4 13.4 0 0 1 1.354-7.23l9.063 9.147l5.208-1.042l1.042-5.208l-9.146-9A13.4 13.4 0 0 1 21 6.25a13.54 13.54 0 0 1 12 10.417a13.73 13.73 0 0 1-1.146 9.208l10.854 10.854a4.17 4.17 0 0 1 0 5.98"></svg:path>`,
})
export class MarketeqSettingsAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSettingsAlt5Icon],svg[marketeq-settings-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M33.333 21.542v-4.875h-4.875L25 13.208l-3.458 3.459h-4.875v4.875L13.208 25l3.459 3.458v4.875h4.875L25 36.792l3.458-3.459h4.875v-4.875L36.792 25z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 25h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqSettingsAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqShareAltIcon],svg[marketeq-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 6.25l10.417 8.333l-10.417 8.334V18.75s-10.416 0-14.583 6.25c0 0 2.083-12.5 14.583-14.583z"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083v12.5a2.083 2.083 0 0 1-2.083 2.084H8.333a2.083 2.083 0 0 1-2.083-2.084V12.5a2.083 2.083 0 0 1 2.083-2.083h8.334"></svg:path></svg:g>`,
})
export class MarketeqShareAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqShareAlt5Icon],svg[marketeq-share-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.083 22.188l13.792-6.875M18.083 27.792l13.792 6.895z"></svg:path><svg:path stroke="#306CFE" d="M12.5 18.75a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 0 1 0-12.5M31.25 37.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0m6.25-18.75a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class MarketeqShareAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqShippingBox2Icon],svg[marketeq-shipping-box-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 35.417V37.5a2.083 2.083 0 0 1-2.084 2.083h-25A2.083 2.083 0 0 1 6.25 37.5v-25a2.083 2.083 0 0 1 2.083-2.083h25"></svg:path><svg:path stroke="#344054" d="M33.333 27.083H43.75M16.667 10.417v12.5l4.166-2.084L25 22.917v-12.5zM43.75 18.75h-8.333z"></svg:path></svg:g>`,
})
export class MarketeqShippingBox2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSignInDoubleArrow2Icon],svg[marketeq-sign-in-double-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 31.25L14.583 25l6.25-6.25m10.417 12.5L25 25l6.25-6.25M25 25h18.75"></svg:path><svg:path stroke="#306CFE" d="M14.583 8.333h-6.25a2.083 2.083 0 0 0-2.083 2.084v29.166a2.083 2.083 0 0 0 2.083 2.084h6.25"></svg:path></svg:g>`,
})
export class MarketeqSignInDoubleArrow2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSignOutAltIcon],svg[marketeq-sign-out-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 25h-25m8.333-8.333L18.75 25l8.333 8.333"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqSignOutAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSignOutLeftIcon],svg[marketeq-sign-out-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 8.333h6.25a2.083 2.083 0 0 1 2.083 2.084v29.166a2.083 2.083 0 0 1-2.083 2.084h-6.25"></svg:path><svg:path stroke="#306CFE" d="m19.667 11.77l3.25 2.813a2.084 2.084 0 0 1 .229 2.938l-3.021 3.312h15.292v8.334H20.125l2.938 3.416a2.083 2.083 0 0 1-.146 2.938l-3.167 2.708A2.083 2.083 0 0 1 16.667 38L6.75 26.354a2.08 2.08 0 0 1 0-2.708L16.667 12a2.084 2.084 0 0 1 3-.23"></svg:path></svg:g>`,
})
export class MarketeqSignOutLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSignalIcon],svg[marketeq-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M25 18.75v25"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M32.375 12.146a10.417 10.417 0 0 1 0 14.729m-14.75 0a10.417 10.417 0 0 1 0-14.73M38.25 6.25a18.75 18.75 0 0 1 0 26.52m-26.5 0a18.75 18.75 0 0 1 0-26.52"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M24.896 19.5h.208"></svg:path></svg:g>`,
})
export class MarketeqSignalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSignal2Icon],svg[marketeq-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M11.75 38.25a18.75 18.75 0 0 1 0-26.5m5.875 5.875a10.417 10.417 0 0 0 0 14.75M38.25 38.25a18.75 18.75 0 0 0 0-26.5m-5.875 20.625a10.415 10.415 0 0 0 0-14.75"></svg:path></svg:g>`,
})
export class MarketeqSignal2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSleepingBagIcon],svg[marketeq-sleeping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 35.417h4.166m6.25 8.333H16.667a2.083 2.083 0 0 1-2.084-2.083V14.583a8.333 8.333 0 0 1 8.334-8.333h4.166a8.333 8.333 0 0 1 8.334 8.333v27.084a2.083 2.083 0 0 1-2.084 2.083M22.917 27.083h4.166z"></svg:path><svg:path stroke="#306CFE" d="M35.417 18.75v22.917a2.083 2.083 0 0 1-2.084 2.083H16.667a2.083 2.083 0 0 1-2.084-2.083V18.75z"></svg:path></svg:g>`,
})
export class MarketeqSleepingBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSleepingBag2Icon],svg[marketeq-sleeping-bag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 6.25h4.166a8.333 8.333 0 0 1 8.334 8.333v27.084a2.083 2.083 0 0 1-2.084 2.083H16.667a2.083 2.083 0 0 1-2.084-2.083V14.583a8.333 8.333 0 0 1 8.334-8.333"></svg:path><svg:path stroke="#306CFE" d="M25 43.75V22.917a4.167 4.167 0 0 1 4.167-4.167h6.25v22.917a2.083 2.083 0 0 1-2.084 2.083zm-10.417-2.083V18.75h6.25A4.167 4.167 0 0 1 25 22.917V43.75h-8.333a2.083 2.083 0 0 1-2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqSleepingBag2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSofaIcon],svg[marketeq-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 18.75V12.5a2.083 2.083 0 0 1 2.083-2.083h25a2.083 2.083 0 0 1 2.083 2.083v6.25M10.417 39.583v-4.166m29.166 4.166v-4.166z"></svg:path><svg:path stroke="#306CFE" d="M43.75 22.917v8.333a4.167 4.167 0 0 1-4.167 4.167H10.417A4.167 4.167 0 0 1 6.25 31.25v-8.333a4.166 4.166 0 0 1 4.875-4.167a4.31 4.31 0 0 1 3.458 4.396v3.937h20.834v-3.937a4.31 4.31 0 0 1 3.458-4.396a4.168 4.168 0 0 1 4.875 4.167"></svg:path></svg:g>`,
})
export class MarketeqSofaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSofa2Icon],svg[marketeq-sofa-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 18.75a8.333 8.333 0 0 1 8.333-8.333h12.5a8.333 8.333 0 0 1 8.333 8.333M10.417 39.583v-4.166m29.166 4.166v-4.166z"></svg:path><svg:path stroke="#306CFE" d="M43.75 22.917v8.333a4.167 4.167 0 0 1-4.167 4.167H10.417A4.167 4.167 0 0 1 6.25 31.25v-8.333a4.166 4.166 0 0 1 4.875-4.167a4.31 4.31 0 0 1 3.458 4.396v3.937h20.834v-3.937a4.31 4.31 0 0 1 3.458-4.396a4.168 4.168 0 0 1 4.875 4.167"></svg:path></svg:g>`,
})
export class MarketeqSofa2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSortIcon],svg[marketeq-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25h29.167"></svg:path><svg:path stroke="#306CFE" d="M6.25 35.417h20.833M6.25 14.583h37.5z"></svg:path></svg:g>`,
})
export class MarketeqSortIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSortAscendingIcon],svg[marketeq-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 31.25L12.5 39.583L4.167 31.25m8.333 8.333V8.333"></svg:path><svg:path stroke="#306CFE" d="M41.667 12.5H20.833m20.834 20.833H31.25zm0-10.416H27.083z"></svg:path></svg:g>`,
})
export class MarketeqSortAscendingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSortDescendingIcon],svg[marketeq-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M4.167 16.667L12.5 8.333l8.333 8.334M12.5 8.333v31.25"></svg:path><svg:path stroke="#306CFE" d="M41.667 35.417H20.833m20.834-20.834H31.25zm0 10.417H27.083z"></svg:path></svg:g>`,
})
export class MarketeqSortDescendingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSoundIncreaseIcon],svg[marketeq-sound-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 25h12.5m-6.25 6.25v-12.5z"></svg:path><svg:path stroke="#306CFE" d="M22.917 10.417v29.166l-8.334-8.333h-6.25a2.083 2.083 0 0 1-2.083-2.083v-8.334a2.083 2.083 0 0 1 2.083-2.083h6.25z"></svg:path></svg:g>`,
})
export class MarketeqSoundIncreaseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSoundMaxIcon],svg[marketeq-sound-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M38.25 11.75a18.75 18.75 0 0 1 0 26.5m-5.875-20.625a10.415 10.415 0 0 1 0 14.75"></svg:path><svg:path stroke="#306CFE" d="M22.917 10.417v29.166l-8.334-8.333h-6.25a2.083 2.083 0 0 1-2.083-2.083v-8.334a2.083 2.083 0 0 1 2.083-2.083h6.25z"></svg:path></svg:g>`,
})
export class MarketeqSoundMaxIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSoundMinIcon],svg[marketeq-sound-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M36.542 17.625a10.415 10.415 0 0 1 0 14.75"></svg:path><svg:path stroke="#306CFE" d="M27.083 10.417v29.166L18.75 31.25H12.5a2.083 2.083 0 0 1-2.083-2.083v-8.334A2.083 2.083 0 0 1 12.5 18.75h6.25z"></svg:path></svg:g>`,
})
export class MarketeqSoundMinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSoundReduceIcon],svg[marketeq-sound-reduce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 25h12.5"></svg:path><svg:path stroke="#306CFE" d="M22.917 10.417v29.166l-8.334-8.333h-6.25a2.083 2.083 0 0 1-2.083-2.083v-8.334a2.083 2.083 0 0 1 2.083-2.083h6.25z"></svg:path></svg:g>`,
})
export class MarketeqSoundReduceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSquareRootIcon],svg[marketeq-square-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.25 25h2.73a2.08 2.08 0 0 1 1.937 1.354l5.75 15.313l5.937-31.625a2.08 2.08 0 0 1 2.084-1.709H43.75"></svg:path>`,
})
export class MarketeqSquareRootIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSquareRootOfXIcon],svg[marketeq-square-root-of-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m29.167 25l8.333 8.333m0-8.333l-8.333 8.333"></svg:path><svg:path stroke="#306CFE" d="M6.25 25h2.98a2.08 2.08 0 0 1 1.79 1.02l5.647 9.397l5.812-19.354a2.08 2.08 0 0 1 2.084-1.48H43.75"></svg:path></svg:g>`,
})
export class MarketeqSquareRootOfXIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSquareRootSquareIcon],svg[marketeq-square-root-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 25h2.084l4.166 8.333L25 16.667h10.417"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqSquareRootSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStairsIcon],svg[marketeq-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 37.5h16.666m-16.666-25h16.666zm0 8.333h16.666zm0 8.334h16.666z"></svg:path><svg:path stroke="#306CFE" d="M33.333 6.25v37.5M16.667 6.25v37.5z"></svg:path></svg:g>`,
})
export class MarketeqStairsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStairs3Icon],svg[marketeq-stairs-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 18.75L8.333 6.25m31.25 11.708v17.459zM10.417 7.042v15.875z"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5M8.333 22.917V43.75h33.334v-8.333h-8.334V31.25H25v-4.167h-8.333v-4.166z"></svg:path></svg:g>`,
})
export class MarketeqStairs3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStamp3Icon],svg[marketeq-stamp-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 41.667H16.667v2.083h16.666z"></svg:path><svg:path stroke="#306CFE" d="M20.833 29.167h8.334a26.1 26.1 0 0 1 3.208-10.792A8.333 8.333 0 1 0 16.917 12.5a8.33 8.33 0 0 0 .687 5.917a26.9 26.9 0 0 1 3.23 10.75m13.271 1.729a2.084 2.084 0 0 0-2.083-1.73H18.063a2.08 2.08 0 0 0-2.084 1.73l-1.396 8.333a2.084 2.084 0 0 0 2.084 2.438h16.666a2.083 2.083 0 0 0 2.084-2.438z"></svg:path></svg:g>`,
})
export class MarketeqStamp3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStatsIcon],svg[marketeq-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 35.417V14.583M25 35.417v-12.5zm-8.333 0V31.25z"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqStatsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStickyNotes2Icon],svg[marketeq-sticky-notes-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M29.167 10.417h10.416a2.083 2.083 0 0 1 2.084 2.083v18.75l-12.5 12.5h-18.75a2.083 2.083 0 0 1-2.084-2.083V12.5a2.083 2.083 0 0 1 2.084-2.083h10.416"></svg:path><svg:path stroke="#306CFE" d="M29.167 31.25v12.5l12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M29.167 16.667V8.333c0-1.15-.933-2.083-2.084-2.083h-4.166a2.084 2.084 0 0 0-2.084 2.083v8.334c0 1.15.933 2.083 2.084 2.083h4.166c1.15 0 2.084-.933 2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqStickyNotes2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStickyNotes6Icon],svg[marketeq-sticky-notes-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 14.583v18.75a2.083 2.083 0 0 1-2.084 2.084h-25a2.083 2.083 0 0 1-2.083-2.084v-18.75A2.083 2.083 0 0 1 8.333 12.5h25"></svg:path><svg:path stroke="#306CFE" d="M10.417 43.75h31.25a2.083 2.083 0 0 0 2.083-2.083V20.833"></svg:path><svg:path stroke="#344054" d="m34.563 13.354l-5.396 5.396m12.5-8.333a4.167 4.167 0 1 0-8.334 0v0a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqStickyNotes6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStickyNotes9Icon],svg[marketeq-sticky-notes-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 14.583v27.084a2.083 2.083 0 0 1-2.084 2.083H18.75l-12.5-12.5V14.583A2.083 2.083 0 0 1 8.333 12.5h25"></svg:path><svg:path stroke="#306CFE" d="m6.25 31.25l12.5 12.5v-12.5z"></svg:path><svg:path stroke="#344054" d="m34.563 13.354l-5.396 5.396m12.5-8.333a4.167 4.167 0 1 0-8.334 0v0a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqStickyNotes9Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStoolIcon],svg[marketeq-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M13.542 29.167h22.916"></svg:path><svg:path stroke="#306CFE" d="M35.417 14.583L37.5 43.75M14.583 14.583L12.5 43.75m2.083-37.5h20.834A2.083 2.083 0 0 1 37.5 8.333v6.25h-25v-6.25a2.083 2.083 0 0 1 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqStoolIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStool2Icon],svg[marketeq-stool-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 27.083h6.25A2.083 2.083 0 0 0 33.333 25v-2.083"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75h12.5m6.25-29.167h-25v-6.25a2.083 2.083 0 0 1 2.083-2.083h20.834A2.083 2.083 0 0 1 37.5 8.333zm-12.5 0V43.75z"></svg:path></svg:g>`,
})
export class MarketeqStool2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStopIcon],svg[marketeq-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path>`,
})
export class MarketeqStopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStopwatch3SecondIcon],svg[marketeq-stopwatch-3-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 6.25h12.5m4.792 10.833l3.125-3.125zm-22.084 0l-3.125-3.125zM25 20.833v8.334h7.208a5.7 5.7 0 0 0 0-1.042A7.29 7.29 0 0 0 25 20.833m0-8.333V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqStopwatch3SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqStopwatch7SecondIcon],svg[marketeq-stopwatch-7-second-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 6.25h-12.5m-4.792 10.833l-3.125-3.125zm22.084 0l3.125-3.125zM17.708 28.125a7.25 7.25 0 0 0 3 5.875L25 29.167v-8.334a7.29 7.29 0 0 0-7.292 7.292M25 12.5V6.25z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c8.63 0 15.625-6.996 15.625-15.625c0-8.63-6.996-15.625-15.625-15.625c-8.63 0-15.625 6.996-15.625 15.625c0 8.63 6.996 15.625 15.625 15.625"></svg:path></svg:g>`,
})
export class MarketeqStopwatch7SecondIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSubwayIcon],svg[marketeq-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 39.583h16.666M18.75 31.25l-4.167 12.5zm16.667 12.5l-4.167-12.5zM20.833 22.917h8.334"></svg:path><svg:path stroke="#306CFE" d="M20.833 6.25h8.334a8.333 8.333 0 0 1 8.333 8.333v14.584a2.083 2.083 0 0 1-2.083 2.083H14.583a2.083 2.083 0 0 1-2.083-2.083V14.583a8.333 8.333 0 0 1 8.333-8.333"></svg:path></svg:g>`,
})
export class MarketeqSubwayIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSuitIcon],svg[marketeq-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 12.5v29.167a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V12.5a2.083 2.083 0 0 1 2.083-2.083H12.5l4.167-4.167h16.666l4.167 4.167h4.167A2.083 2.083 0 0 1 43.75 12.5"></svg:path><svg:path stroke="#344054" d="M16.667 6.25L25 15.188l8.333-8.938zm16.666 0L25 15.188l8.333 5.645L37.5 10.417zM12.5 10.417l4.167 10.416L25 15.188L16.667 6.25z"></svg:path></svg:g>`,
})
export class MarketeqSuitIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSuitcaseBagIcon],svg[marketeq-suitcase-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 6.25h8.334a6.25 6.25 0 0 1 6.25 6.25v2.083H14.583V12.5a6.25 6.25 0 0 1 6.25-6.25M22.917 25h4.166"></svg:path><svg:path stroke="#306CFE" d="m41.313 29.98l-1.5 11.937a2.084 2.084 0 0 1-2.084 1.833H12.25a2.084 2.084 0 0 1-2.083-1.833l-1.5-11.938"></svg:path><svg:path stroke="#306CFE" d="m42.333 29.646l-9.437 3.146a25 25 0 0 1-15.792 0l-9.437-3.146a2.084 2.084 0 0 1-1.417-2.084V14.584h37.5v13.084a2.08 2.08 0 0 1-1.417 1.979"></svg:path></svg:g>`,
})
export class MarketeqSuitcaseBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[marketeqSuspensionIcon],svg[marketeq-suspension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75a4.167 4.167 0 1 1 0-8.334a4.167 4.167 0 0 1 0 8.334m0-8.333v-25zM27.083 6.25h-4.166v4.167h4.166z"></svg:path><svg:path stroke="#344054" d="m20.833 17.708l8.334-2.083m-8.334 8.333l8.334-2.083zm0 6.25l8.334-2.083z"></svg:path></svg:g>`,
})
export class MarketeqSuspensionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
